import { ImageResponse } from "next/og";
import { getProfile } from "@/data/profiles";

export const alt = "The Banking Five member profile for VAIC 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = getProfile(slug);
  const name = profile?.identity.name ?? "The Banking Five";
  const role = profile?.identity.role.en ?? "Vietnam AI Innovation Challenge 2026";
  const initials = profile?.identity.initials ?? "BF";
  const footerLeft = profile?.identity.caption[0].en ?? "Banking / AI / Innovation";
  const footerRight = profile?.identity.caption[1].en ?? "VAIC 2026";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#F7F9FC",
        color: "#0B1220",
        padding: "64px 72px",
        borderTop: "18px solid #1D4ED8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: 62,
              height: 62,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              background: "#1D4ED8",
              color: "white",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            {initials}
          </div>
          <div style={{ display: "flex", color: "#526173", fontSize: 22 }}>
            THE BANKING FIVE | VAIC 2026
          </div>
        </div>
        <div style={{ display: "flex", color: "#1D4ED8", fontSize: 20 }}>BANKING TRACK</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1030 }}>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: "-5px" }}>
          {name}
        </div>
        <div style={{ display: "flex", marginTop: 18, color: "#1D4ED8", fontSize: 38 }}>
          {role}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #DCE3EA",
          paddingTop: 24,
          color: "#526173",
          fontSize: 21,
        }}
      >
        <span>{footerLeft}</span>
        <span>{footerRight}</span>
      </div>
    </div>,
    size,
  );
}
