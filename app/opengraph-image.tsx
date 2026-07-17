import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const markDataUri = `data:image/png;base64,${readFileSync(
    join(process.cwd(), "public", "entirexperts-mark.png")
  ).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0c4ba2 0%, #1068e0 55%, #1c7d71 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 40, fontWeight: 700 }}>
          <img src={markDataUri} width={64} height={64} alt="" />
          EntireXperts
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 52, fontWeight: 700, maxWidth: 900, lineHeight: 1.15 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
