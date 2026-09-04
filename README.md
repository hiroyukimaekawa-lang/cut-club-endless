# カット倶楽部エンドレス — Webサイト

Vite + React + TypeScript + プレーンCSS。Cloudflare Pages への静的デプロイ前提。

```bash
npm install
npm run dev        # 開発サーバー (http://localhost:5173)
npm run typecheck  # 型チェック
npm run build      # 本番ビルド → dist/
npm run preview    # ビルド結果の確認
```

## デプロイ先：Cloudflare Pages

このサイトはサーバーを必要としません。ビルド結果の `dist/` は
HTML・CSS・JavaScript・画像だけの静的ファイルなので、Pages にそのまま置けます。

### GitHubリポジトリ連携で公開する（推奨）

Cloudflare ダッシュボード → Workers & Pages → Create → Pages →
Connect to Git で `hiroyukimaekawa-lang/cut-club-endless` を選び、以下を設定します。

| 項目 | 値 |
| --- | --- |
| Framework preset | None（または Vite） |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | （空欄のまま） |
| Node version | `.node-version` の `22` が自動で使われます |

以降は `main` へ push するたびに自動でビルド・公開されます。

### 手元から直接アップロードする場合

```bash
npm run build
npx wrangler pages deploy dist --project-name=cut-club-endless
```

### Pages 用の設定ファイル

| ファイル | 役割 |
| --- | --- |
| `public/_headers` | セキュリティヘッダーとキャッシュ設定（ビルド時に `dist/_headers` へコピー） |
| `.node-version` | Pages のビルドで使う Node のバージョン |

`_redirects` は置いていません。1ページ構成でクライアント側ルーティングを使っていないため、
存在しないURLは Pages の標準どおり 404 を返すのが正しい挙動です。

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
