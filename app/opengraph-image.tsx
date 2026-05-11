import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Medsafe Solutions — Clinical Data Management Training";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #061f3f 0%, #0a315f 50%, #0f427e 100%)",
          color: "#fff",
          fontFamily: "system-ui, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #ffd35a, #f4b400)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#061f3f",
              fontSize: 32,
              fontWeight: 900
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 800 }}>Medsafe Solutions</div>
            <div style={{ fontSize: 18, color: "#ffd35a", letterSpacing: 4, textTransform: "uppercase" }}>
              Clinical Data Management
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.1 }}>
            CDM training built for a sharper, job-ready future.
          </div>
          <div style={{ fontSize: 28, color: "#cfe1ff", maxWidth: 900 }}>
            EDC workflows · CDISC orientation · Query handling · Placement support · Kakinada, Andhra Pradesh
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22 }}>
          <span style={{ color: "#cfe1ff" }}>medsafesolutions.in</span>
          <span style={{ color: "#ffd35a", fontWeight: 800 }}>Apply Now →</span>
        </div>
      </div>
    ),
    size
  );
}
