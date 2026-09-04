# オーナー確認事項（未確定情報）

サイト上では以下を「確認中」「PRICE / COMING SOON」「準備中」と表示しています。
推測での記載はしていません。確定した項目から順に反映します。

## 1. 店舗情報 — `src/data/site.ts` の `shopInfo`

| 項目 | 変数 | 現在の表示 |
| --- | --- | --- |
| 住所 | `address` | 確認中 |
| 電話番号 | `tel` | 確認中（確定すると発信リンクになります） |
| 営業時間 | `hours` | 確認中 |
| 定休日 | `closed` | 確認中 |
| 駐車場 | `parking` | 確認中 |
| Google Maps 埋め込みURL | `mapUrl` | 地図プレースホルダー |
| Hot Pepper Beauty 予約URL | `hotpepperUrl` | ボタンは無効（「リンクを確認中です」） |

`null` を文字列に置き換えるだけで表示が切り替わります。

## 2. メニューと料金 — `src/data/menu.ts`

- カット / カラー / その他メニューの正式なメニュー名
- 各メニューの料金（`price: null` を `'¥0,000'` のように置き換える）
- 料金が1つでも入ると、その行だけ通常表示に切り替わります

## 3. 写真 — `/public/images/`

| 用途 | データ | 推奨 |
| --- | --- | --- |
| ヒーロー | `site.ts` の `heroImage` | 横長 2000×1400 前後 |
| コンセプト3点 | `site.ts` の `identityPoints[].image` | 縦 1200×1500 |
| スタイル 8点 | `gallery.ts` の `styleGallery` | 縦 1200×1500 |
| サロン 6点 | `gallery.ts` の `salonGallery` | 各 `ratio` に合わせる |
| OGP | `public/images/ogp.jpg` | 1200×630 |

詳細は `public/images/README.md` を参照。

## 4. ブランド・SEO

- 正式ロゴ（`public/favicon.svg` はプレースホルダー）
- 公開ドメイン（`index.html` の `canonical` と `og:url` が `https://example.com/` のまま）
- ブランドカラーの希望（現在は muted sage `#5c6b56` をアクセントに使用）

## 5. 構造化データ

`index.html` に `HairSalon` の JSON-LD テンプレートをコメントで用意しています。
住所・電話番号・営業時間が確定してから有効化してください（未確認のまま公開しないこと）。
