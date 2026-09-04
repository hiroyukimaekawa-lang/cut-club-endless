# TASK.md
# カット倶楽部エンドレス — 参考HPを実装する

`docs/PROJECT_BRIEF.md` を読み、参考ホームページを実装してください。

## Objective

商談内容を反映し、
「通いやすい」「一人ひとりを大切にする」「また来たいと思える」
という価値が自然に伝わる日本語の美容室/カットサロンサイトを制作する。

## Mandatory

1. 日本語サイトのため、作業前に
   `skills/japanese-web-typography/SKILL.md`
   を読むこと。
2. PROJECT_BRIEFの事実と提案を区別すること。
3. 未確認情報を創作しないこと。
4. スマートフォンを最優先すること。
5. 375 / 390 / 430 / 768 / 1024 / 1440pxで確認すること。
6. 実装後に日本語改行Visual QAを行うこと。
7. 問題があれば修正→再レンダリング→再確認すること。

## If repository is empty

Create a production-ready but lightweight site.

Preferred default:
- Vite
- React
- TypeScript
- plain CSS or CSS Modules

Avoid adding a large UI framework unless truly necessary.

The finished site should build as static assets and be easy to deploy to Cloudflare Pages.

## Desired sections

- Header
- Hero
- Concept
- 3 Points
- Menu
- Reservation
- Access / Shop Information
- Footer

## Visual behavior

- mobile-first
- warm and clean
- readable Japanese typography
- subtle motion only
- high contrast
- generous spacing
- touch-friendly CTA
- sticky mobile reservation CTA is allowed if unobtrusive

## Images

If no real shop images exist:
- do not fetch/hotlink arbitrary salon images
- create neutral placeholders / image frames
- make replacement locations obvious in code
- the page should still look intentional without photos

## Final QA

Run:
- build
- type check/lint if configured
- responsive render checks
- Japanese typography checks

Then report:
- what was implemented
- QA result
- TODO information needed from the owner
