import { ImageResponse } from "next/og";

import { PERFIL } from "@/data/portfolio";

export const alt = `${PERFIL.nome} — ${PERFIL.cargo}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Card compartilhado no LinkedIn / WhatsApp / Twitter.
 * Gerado em build time — sem imagens externas, apenas CSS.
 */
export default function OpenGraphImage() {
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
          background: "#0A0E14",
          backgroundImage:
            "radial-gradient(900px 500px at 90% 0%, rgba(88,166,255,0.22), transparent 60%), radial-gradient(800px 500px at 0% 100%, rgba(163,113,247,0.20), transparent 60%)",
          color: "#F0F6FC",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 24,
            color: "#3FB950",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#3FB950",
            }}
          />
          Disponível para novas oportunidades
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {PERFIL.nome}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 38,
            color: "#58A6FF",
            marginTop: "18px",
            fontWeight: 600,
          }}
        >
          {PERFIL.cargo}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            marginTop: "44px",
          }}
        >
          {["Power BI", "SQL / Oracle", "Python", "ETL", "KPIs & OKRs"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 24,
                  color: "#7EE7FC",
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(88,166,255,0.35)",
                  background: "rgba(88,166,255,0.08)",
                }}
              >
                {t}
              </div>
            ),
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#8B98A9",
            marginTop: "48px",
          }}
        >
          {PERFIL.localizacao}
        </div>
      </div>
    ),
    size,
  );
}