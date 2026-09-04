# カット倶楽部エンドレス — Webサイト

Vite + React + TypeScript + プレーンCSS。Cloudflare Pages への静的デプロイ前提。

```bash
npm install
npm run dev        # 開発サーバー (http://localhost:5173)
npm run typecheck  # 型チェック
npm run build      # 本番ビルド → dist/
npm run preview    # ビルド結果の確認
```

## Cloudflare Pages 設定

| 項目 | 値 |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |

## 構成

```text
src/
  components/   セクション単位のコンポーネント
  data/         店舗情報・メニュー・ギャラリー（差し替えはここだけ）
  styles/       base.css（トークン・日本語タイポグラフィ）/ app.css（レイアウト）
  hooks/        スクロール表示
public/images/  写真の置き場所（README.md 参照）
```

未確定の店舗情報・料金・写真は `docs/OWNER_TODO.md` にまとめています。

---

# Codex / Claude Code 共通スターター

## 使い方

このフォルダの内容を、制作するHPのGitリポジトリ直下へ置きます。

```text
repo/
├── AGENTS.md
├── CLAUDE.md
├── TASK.md
├── docs/
│   └── PROJECT_BRIEF.md
└── skills/
    └── japanese-web-typography/
        ├── SKILL.md
        ├── examples/
        └── references/
```

## Codex

リポジトリをCodexで開き、次の依頼だけで開始できます。

```text
TASK.mdを実行してください。
PROJECT_BRIEF.mdとAGENTS.mdのルールを守り、
実装からレスポンシブVisual QAまで完了してください。
```

Codexでは `AGENTS.md` がリポジトリ指示の入口になります。

## Claude Code

ターミナルでリポジトリへ移動してClaude Codeを起動し、

```text
TASK.mdを実行してください。
実装からVisual QAまで進めてください。
```

と依頼します。

`CLAUDE.md` から日本語Typography Skillを読み込む構成です。

## 重要

このスターターには、未確認の店舗情報を意図的に入れていません。

住所、電話番号、料金、営業時間、予約URL、実写真などが分かったら、
`docs/PROJECT_BRIEF.md` の TODO を更新してから再度Agentへ修正依頼してください。
