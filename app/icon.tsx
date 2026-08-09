import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #58A6FF 0%, #A371F7 100%)",
          color: "#FFFFFF",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
      >
        RC
      </div>
    ),
    size,
  );
}