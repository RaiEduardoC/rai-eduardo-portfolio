import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Ícones e foto de perfil são PNG/JPG locais e pequenos; servir direto
    // evita a rota /_image e mantém o deploy 100% estático.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Assets versionados junto com o deploy: cache longo com segurança.
        source: "/assets/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/certificados/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;