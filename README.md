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

| Camada          | Tecnologia                                                              |
| --------------- | ---------------------------------------------------------------------- |
| Framework       | **React 18** + **Vite 6**                                              |
| Linguagem       | **TypeScript** (modo strict)                                           |
| Estilo          | **Tailwind CSS v4** (config via `@theme` no CSS)                       |
| Animação (UI)   | **Framer Motion** (reveals, marquee, micro-interações)                 |
| 3D / WebGL      | **Three.js** + **React Three Fiber** + **@react-three/drei**          |
| Build/Bundler   | **Vite** + `@tailwindcss/vite` (code-splitting via `React.lazy`)       |
| Backend         | nenhum — 100% estático                                                  |
| Deploy          | **Cloudflare Pages** (`npm run build` → `dist`)                        |
| Ambiente        | **Node.js 18+** · **Git** · **Docker Compose** (opcional)             |

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

## ✦ O laptop 3D (WebGL)

O destaque do hero é um **laptop 3D interativo** renderizado em **WebGL**, no
mesmo espírito do crachá/lanyard do template que inspirou o projeto — mas
**autoral e mais enxuto**.

**Como funciona**

- **React Three Fiber** (`@react-three/fiber`) monta a cena 3D num `<canvas>`;
  **drei** (`@react-three/drei`) fornece os helpers.
- O laptop é **geometria procedural** (`RoundedBox` para chassi e tampa, teclado
  chiclet via `Instances`, trackpad, dobradiça, pés) — **sem modelo `.glb`
  externo**, sem licença de asset.
- A **tela** é um `CanvasTexture`: um `<canvas>` 2D desenha a grade de logos da
  stack com glow e é usado como `emissiveMap`, então os logos "emitem luz".
- **Interação:** `PresentationControls` (arrastar para girar) + `Float`
  (flutuação sutil quando parado).
- **Iluminação:** `Environment` com `Lightformer` (reflexos no alumínio sem
  baixar HDR externo).
- **Acessibilidade & fallback:** carregado via `React.lazy` (code-split do
  Three.js); enquanto carrega — ou se o dispositivo não tiver WebGL — exibe um
  *poster* estático com os mesmos logos (`role="img"` + `aria-label`).

> Referência: o template original usa R3F + **@react-three/rapier** (física do
> cordão) + **meshline** + um modelo `.glb`. Aqui trocamos a física e o modelo
> por **geometria procedural** + rotação por gesto — mais leve e fácil de manter.

**Performance (mira em 60 / 120 / 144Hz)**

O R3F renderiza no `requestAnimationFrame`, então acompanha o refresh do monitor.
Para segurar o *frame budget*:

- **`<PerformanceMonitor>`** ajusta o **pixel ratio em runtime** (sobe quando
  estável, cai quando o FPS oscila) — evita travar em telas de alta densidade.
- **Contact shadow** é renderizada **uma vez** (`frames={1}`), não a cada frame.
- **Teclas instanciadas** (1 draw call), `Environment` em resolução baixa e
  geometria com poucos segmentos.
- O chunk do Three.js é **carregado sob demanda**, mantendo o load inicial leve.
- Respeita `prefers-reduced-motion` nas animações de UI.

Arquivos: [`src/components/three/`](src/components/three/) — `LaptopScene.tsx`
(canvas/perf), `Laptop.tsx` (geometria), `useScreenTexture.ts` (tela),
`logos.ts` (stack), `LaptopShowcase.tsx` (lazy + fallback).

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
└─ favicon.svg · og-image.svg
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
