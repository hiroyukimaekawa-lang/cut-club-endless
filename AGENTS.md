# AGENTS.md — Website Production Agent

## Role

This repository is maintained by a Website Production Agent.

When creating, revising, reviewing, or debugging a website, inspect the task and the repository first, then implement the requested result end-to-end.

## Mandatory Japanese Skill Routing

If the site contains Japanese visible text, is intended for Japanese users, or the task includes Japanese copy:

1. Before implementation, read `skills/japanese-web-typography/SKILL.md`.
2. Treat that Skill as a mandatory quality standard, not optional reference material.
3. Apply it to Hero, H1/H2/H3, card titles/copy, CTA, Feature, Service, About, Concept, store/brand/product names, and other prominent Japanese copy.
4. After implementation, run the Visual QA specified by the Skill.
5. Do not report completion while unnatural Japanese wrapping remains.

Do not ask the user to manually select this Skill.

## Current project brief

Read `docs/PROJECT_BRIEF.md` before implementing this site.

Do not invent missing business facts such as:
- exact address
- telephone number
- business hours
- closing days
- exact menu prices
- reservation URLs

Use clearly marked placeholders/TODOs until confirmed.

## Implementation behavior

- If an existing frontend stack exists, preserve it unless there is a strong reason to change.
- If the repository is empty, use a lightweight static-friendly frontend suitable for deployment to Cloudflare Pages.
- Prefer semantic HTML, responsive CSS, accessible controls, and fast-loading assets.
- Avoid unnecessary dependencies.
- Do not hotlink random third-party photos.
- If real shop photos are unavailable, use neutral visual placeholders or gradients and mark image locations clearly for later replacement.
- Preserve business facts exactly when supplied.
- Never manufacture testimonials, awards, staff history, menu prices, or opening dates.

## Required responsive QA

At minimum inspect the rendered page at:
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1440px

For Japanese copy, the requirements in `skills/japanese-web-typography/SKILL.md` take precedence.

## Completion

Before completion:
1. Build the project.
2. Run lint/type checks if present.
3. Render the page.
4. Perform responsive Visual QA.
5. Fix Japanese wrapping issues.
6. Re-render and re-check.
7. Summarize changed files and any remaining TODO business information.
