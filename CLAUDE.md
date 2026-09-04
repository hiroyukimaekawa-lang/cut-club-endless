# CLAUDE.md — Website Production Agent

This is a website production repository.

## Required project context

Read:
- `docs/PROJECT_BRIEF.md`
- `TASK.md`

Because this project is a Japanese-language website, you MUST also read and follow:

@skills/japanese-web-typography/SKILL.md

The Japanese typography Skill is a completion requirement, not optional guidance.

## Working rules

- Build the requested website end-to-end.
- Do not invent missing store facts.
- Preserve any existing framework unless the repository is empty.
- If empty, choose a lightweight static-friendly frontend suitable for Cloudflare Pages.
- Keep dependencies minimal.
- Use responsive semantic HTML/CSS.
- Do not hotlink arbitrary third-party photos.
- Use clearly replaceable placeholders when actual images or business information are missing.
- Never fabricate menu prices, address, telephone number, hours, testimonials, awards, or business history.

## Japanese Visual QA

Check at minimum:
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1440px

Inspect Hero, headings, cards, CTA, About, Concept, Menu labels and all prominent Japanese copy.

Do not finish with breaks such as:
- `チームか / ら`
- `なれるこ / と`
- `つくりた / い`
- particles or 1–2 characters isolated on their own line

After fixing, render again and re-check.

## Completion output

Report:
- files changed
- build/test result
- responsive QA result
- Japanese typography QA result
- unresolved TODO business information
