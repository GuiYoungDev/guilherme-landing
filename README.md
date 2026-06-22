<div align="center">

# Guilherme Nery Calixto

### `Sales, Systems & AI`

Landing page pessoal — dark, moderna e tecnológica, com personalidade musical.
Um currículo diversificado + apresentação de identidade + walkthrough da minha
trajetória profissional, educacional e pessoal.

> _From marketplace data to intelligent systems._
> _Tech immersion started in 2026. The mission is long-term._

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff4d8d?logo=framer&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-deploy-f38020?logo=cloudflare&logoColor=white)

</div>

---

## ✦ Sobre

Não é uma página comum de currículo. É uma apresentação de identidade: tecnologia,
vendas, IA, dados e cultura (jazz, blues, classic rock e basquete) reunidos numa
landing com visual marcante e vibe de produto digital.

**Quem está construindo:** 18 anos, desenvolvedor de um ERP interno na **Vctec**,
estudante de ADS, mergulhado em LLMs, APIs, automações e análise de marketplaces
(Mercado Livre, Shopee, Bling).

## ✦ Stack

| Camada       | Tecnologia                                  |
| ------------ | ------------------------------------------- |
| Framework    | **React 18** + **Vite 6**                   |
| Linguagem    | **TypeScript** (modo strict)                |
| Estilo       | **Tailwind CSS v4** (config via `@theme`)   |
| Animação     | **Framer Motion**                           |
| Backend      | nenhum — 100% estático                      |
| Deploy       | **Cloudflare Pages**                        |

## ✦ Seções

1. **Hero** — tipografia gigante, headline em gradiente e marquee cinético
2. **Identidade rápida** — cards de quem está construindo
3. **Trajetória** — timeline da imersão tech (2026 →)
4. **Projeto em destaque** — case study do ERP interno da Vctec
5. **Skills Matrix** — `Tech` · `AI` · `Business` · `Foundation`
6. **Learning System** — estudo contínuo como rotina
7. **Personal DNA** — música (jazz/blues/classic rock) + basquete/NBA
8. **Vision** — manifesto sobre tecnologia com impacto social
9. **Contato** — GitHub, LinkedIn, Email, WhatsApp

## ✦ Rodando localmente

Requisitos: **Node.js 18+** (testado no 24).

```bash
npm install
npm run dev        # http://localhost:5173
```

Outros scripts:

```bash
npm run build      # build de produção em ./dist
npm run preview    # serve o build localmente
npm run lint       # type-check isolado (tsc)
```

<details>
<summary>Rodar com Docker (opcional)</summary>

```bash
docker compose up  # Vite dev em http://localhost:5173
```

</details>

## ✦ Editando o conteúdo

**Todo o texto e dados pessoais vivem em um único arquivo:**

```
src/data/profile.ts
```

Nome, frases, timeline, projeto, skills, gostos e contatos ficam ali — os
componentes só consomem esses dados. Não precisa caçar texto pelo código.

> ⚠️ **Atualize os placeholders de contato** em `profile.contact.links`
> (GitHub, LinkedIn, WhatsApp) com seus links reais antes de divulgar.

## ✦ Estrutura

```
src/
├─ data/profile.ts         # fonte única de conteúdo
├─ lib/                    # helpers (accent, motion)
├─ components/
│  ├─ ui/                  # Section · Card · Badge · TimelineItem · CTAButton
│  ├─ layout/              # Nav · Footer
│  └─ sections/            # as 9 seções da página
├─ App.tsx                 # composição da página
└─ index.css              # design tokens (Tailwind v4 @theme)
public/
└─ favicon.svg · og-image.svg · _redirects
```

## ✦ Deploy — Cloudflare Pages

Conecte o repositório em **Workers & Pages → Create → Pages → Connect to Git** e use:

| Configuração             | Valor           |
| ------------------------ | --------------- |
| **Framework preset**     | `Vite`          |
| **Build command**        | `npm run build` |
| **Build output dir**     | `dist`          |
| **NODE_VERSION** (env)   | `20`            |

Ou via Wrangler, sem repositório remoto:

```bash
npm run build
npx wrangler pages deploy dist --project-name=guilherme-landing
```

## ✦ Acessibilidade & SEO

- Headings semânticos, skip-link, foco visível, alto contraste e `prefers-reduced-motion`
- `title`, `description`, Open Graph e Twitter cards em `index.html`
- Imagem social autoral em `public/og-image.svg`

---

<div align="center">

**Vamos construir algo?** · feito com React, Vite & Framer Motion

</div>
