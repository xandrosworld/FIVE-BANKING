import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(root, "src");
const allowedGitHub = new Set([
  "https://github.com/xandrosworld",
  "https://github.com/xandrosworld/IDP-PLATFORM-PRO",
  "https://github.com/xandrosworld/KH_ANDUCNHAN",
  "https://github.com/xandrosworld/KH-QUAN-NENTANGHOC",
  "https://github.com/xandrosworld/web-squad2",
]);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const target = path.join(directory, entry.name);
      return entry.isDirectory() ? collectFiles(target) : [target];
    }),
  );
  return nested.flat();
}

const files = (await collectFiles(sourceRoot)).filter((file) => /\.(ts|tsx|css)$/.test(file));
const violations = [];

for (const file of files) {
  const content = await readFile(file, "utf8");
  const relative = path.relative(root, file);
  const forbiddenPatterns = [
    ["em dash", /—/u],
    ["placeholder copy", /lorem ipsum/i],
    ["unverified test count", /231\s+(automated\s+)?tests?/i],
    ["unverified QA set", /22\s+documents?/i],
    ["unverified accuracy claim", /98(?:\.|,)[0-9]+\s*%/i],
    ["private phone number", /(?:\+?84|0)\s*9[0-9\s.-]{7,}/],
    ["private home address", /29\s+Nguyen\s+Chi\s+Thanh/i],
  ];

  for (const [label, pattern] of forbiddenPatterns) {
    if (pattern.test(content)) violations.push(`${relative}: ${label}`);
  }

  for (const match of content.matchAll(/https:\/\/github\.com\/[A-Za-z0-9_.\/-]+/g)) {
    const url = match[0].replace(/["'`)\],;]+$/g, "");
    if (!allowedGitHub.has(url)) violations.push(`${relative}: repository not allowed (${url})`);
  }
}

const profileModuleUrl = pathToFileURL(path.join(sourceRoot, "data", "profiles.ts")).href;
const { profiles } = await import(profileModuleUrl);

function inspectLocalizedCopy(value, trail = "profile") {
  if (!value || typeof value !== "object") return;
  const hasEnglish = Object.prototype.hasOwnProperty.call(value, "en");
  const hasVietnamese = Object.prototype.hasOwnProperty.call(value, "vi");

  if (hasEnglish || hasVietnamese) {
    if (typeof value.en !== "string" || !value.en.trim()) {
      violations.push(`${trail}: missing English copy`);
    }
    if (typeof value.vi !== "string" || !value.vi.trim()) {
      violations.push(`${trail}: missing Vietnamese copy`);
    }
  }

  for (const [key, child] of Object.entries(value)) {
    inspectLocalizedCopy(child, `${trail}.${key}`);
  }
}

for (const [slug, profile] of Object.entries(profiles)) {
  inspectLocalizedCopy(profile, `profiles.${slug}`);
}

if (violations.length) {
  console.error("Content audit failed:\n" + violations.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Content audit passed for ${files.length} source files and ${Object.keys(profiles).length} profile.`);
