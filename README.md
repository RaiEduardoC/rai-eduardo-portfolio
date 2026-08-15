# Portfólio — Raí Eduardo Cardoso

### [portfolio-rai-eduardo.vercel.app](https://portfolio-rai-eduardo.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deploy%20autom%C3%A1tico-000000?logo=vercel&logoColor=white)

Portfólio profissional em **Next.js 15 + React 19 + TypeScript**, com deploy
contínuo na **Vercel**.

Esta é a versão web do portfólio originalmente construído em Python/Streamlit
(`Site - Portifólio/`). Todo o conteúdo e a identidade visual foram
preservados — o que mudou foi a arquitetura: em vez de um app Python que
re-executa a cada clique e hiberna quando fica ocioso, o site agora é
**HTML estático servido por CDN**, com carregamento instantâneo e conteúdo
indexável pelo Google.

## Stack

| Camada       | Tecnologia                                  |
| ------------ | ------------------------------------------- |
| Framework    | Next.js 15 (App Router)                     |
| UI           | React 19 + TypeScript (strict)              |
| Estilo       | CSS puro com design tokens (custom props)   |
| Fontes       | Inter, Plus Jakarta Sans, JetBrains Mono    |
| Hospedagem   | Vercel (CDN global + HTTPS automático)      |

## Estrutura

```
Portfolio-Web/
├── app/
│   ├── layout.tsx            # metadata, SEO, JSON-LD, fontes
│   ├── page.tsx              # página única com âncoras
│   ├── globals.css           # design system completo
│   ├── icon.tsx              # favicon gerado em build
│   ├── opengraph-image.tsx   # card social gerado em build
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Sidebar.tsx           # navegação + scroll-spy + drawer mobile
│   ├── Reveal.tsx            # animação de entrada (IntersectionObserver)
│   ├── Header.tsx
│   ├── SectionTitle.tsx
│   ├── Sobre.tsx
│   ├── Experiencia.tsx
│   ├── Formacao.tsx
│   ├── Certificados.tsx
│   ├── Competencias.tsx
│   ├── Projetos.tsx
│   ├── Contato.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts          # ← FONTE ÚNICA DE CONTEÚDO
├── lib/
│   └── site.ts               # resolução da URL base
└── public/
    ├── assets/               # ícones e foto de perfil
    └── certificados/         # PDFs para download
```

## Como atualizar o conteúdo

Praticamente tudo (perfil, experiências, formação, cursos, certificados,
competências, projetos, contato) vive em **[`data/portfolio.ts`](data/portfolio.ts)**.
Edite esse arquivo, faça commit e a Vercel publica sozinha.

Para adicionar um certificado:

1. Coloque o PDF em `public/certificados/` — use nome em minúsculas, sem
   espaços e sem acentos (`meu-certificado.pdf`).
2. Adicione a entrada correspondente no array `CERTIFICADOS`.

> **Importante:** o servidor da Vercel diferencia maiúsculas de minúsculas nos
> nomes de arquivo. `Foto.PNG` e `foto.png` são arquivos diferentes lá, mesmo
> funcionando igual no Windows.

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run typecheck  # checagem de tipos
```

## Deploy

Deploy automático a cada `git push`. Manualmente:

```bash
npx vercel --prod
```

## Domínio próprio

Ao apontar um domínio para o projeto na Vercel, defina também a variável de
ambiente `NEXT_PUBLIC_SITE_URL` (ex.: `https://raieduardo.com.br`) para que
sitemap, canonical e cards sociais usem o endereço definitivo.

---

© Raí Eduardo Cardoso