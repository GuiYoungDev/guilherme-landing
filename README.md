# Guilherme Nery Calixto — Landing

Landing page pessoal/profissional. Dark, moderna, tecnológica, com personalidade
musical. **Sales, Systems & AI.**

> Currículo diversificado + apresentação de identidade + walkthrough da trajetória
> profissional, educacional e pessoal.

## Stack

- **React 18** + **Vite 6** + **TypeScript** (strict)
- **Tailwind CSS v4** (config via `@theme` no CSS, plugin oficial do Vite)
- **Framer Motion** para animações suaves
- Sem backend — 100% estático
- Deploy pensado para **Cloudflare Pages**

## Como rodar

```bash
npm install
npm run dev        # http://localhost:5173
```

Build de produção:

```bash
npm run build      # gera ./dist
npm run preview    # serve o build localmente
```

Type-check isolado:

```bash
npm run lint
```

### Docker (opcional)

```bash
docker compose up  # Vite dev em http://localhost:5173
```

## Onde editar o conteúdo

**Todo o texto e dados pessoais ficam em um único arquivo:**

```
src/data/profile.ts
```

Mude nome, frases, timeline, projeto, skills, gostos, contatos etc. ali — os
componentes apenas consomem esses dados.

> **Atualize os placeholders de contato** em `profile.contact.links`
> (GitHub, LinkedIn, WhatsApp) com seus links reais.

## Estrutura

```
src/
  data/profile.ts          # fonte única de conteúdo
  lib/                     # helpers (accent, motion)
  components/
    ui/                    # Section, Card, Badge, TimelineItem, CTAButton
    layout/                # Nav, Footer
    sections/              # Hero, IdentityCards, Timeline, CaseStudy,
                           # SkillsMatrix, LearningSystem, PersonalDNA,
                           # Vision, FinalCTA
  App.tsx                  # composição da página
  index.css                # tokens de design (Tailwind v4 @theme)
public/
  favicon.svg  og-image.svg  _redirects
```

## Seções

1. **Hero** — tipografia gigante + marquee cinético + CTAs
2. **Identidade rápida** — cards de quem está construindo
3. **Trajetória** — timeline da imersão tech (2026 →)
4. **Projeto em destaque** — case study do ERP interno da Vctec
5. **Skills Matrix** — Tech · AI · Business · Foundation
6. **Learning System** — estudo contínuo como rotina
7. **Personal DNA** — música (jazz/blues/classic rock) + basquete/NBA
8. **Vision** — manifesto sobre tecnologia com impacto social
9. **Contato** — links (placeholders) GitHub, LinkedIn, Email, WhatsApp

## Deploy — Cloudflare Pages

Conecte o repositório no painel da Cloudflare Pages e use:

| Configuração            | Valor           |
| ----------------------- | --------------- |
| **Build command**       | `npm run build` |
| **Build output dir**    | `dist`          |
| **Node version**        | 18+ (24 ok)     |

Ou via Wrangler:

```bash
npm run build
npx wrangler pages deploy dist
```

## Acessibilidade & SEO

- Headings semânticos, skip-link, foco visível, contraste alto, `prefers-reduced-motion`
- `title`, `description`, Open Graph e Twitter cards em `index.html`
- Imagem social em `public/og-image.svg`
