# /public/images

このフォルダに実写真を置き、`src/data/*.ts` の `src` を埋めるだけでギャラリーが完成します。

## 置き場所と参照方法

1. 画像ファイルをこのフォルダに置く（例：`hero.jpg`）
2. 対応するデータファイルの `src: null` を `src: '/images/hero.jpg'` に書き換える
3. `alt` は日本語で内容が伝わる説明にする（既定値が入っています）

| 用途 | データファイル | 推奨サイズ / 比率 |
| --- | --- | --- |
| ヒーロー（トップ大判） | `src/data/site.ts` の `heroImage` | 横長 2000×1400 前後（3:2〜4:3） |
| スタイルギャラリー | `src/data/gallery.ts` の `styleGallery` | 縦 1200×1500（4:5） |
| サロン写真 | `src/data/gallery.ts` の `salonGallery` | 各項目の `ratio` に合わせる |
| コンセプト3点 | `src/data/site.ts` の `identityPoints` | 縦 1200×1500（4:5） |
| OGP | `public/images/ogp.jpg` | 1200×630 |

`src` が `null` の間は、デザインを崩さないプレースホルダーが表示されます。
第三者サイトの画像を転用しないこと。
