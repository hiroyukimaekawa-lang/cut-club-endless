# HP制作Agentへの組み込み例

推奨構成:

```text
website-builder-agent/
  skills/
    japanese-web-typography/
      SKILL.md
      examples/
      references/
```

または共通Skillとして:

```text
skills/
  japanese-web-typography/
website-builder-agent/
website-fix-agent/
website-qa-agent/
```

以下のタイミングで必ず読み込む。

1. 日本語HPの新規制作
2. Hero / H1 / H2 / H3 / CTAの実装
3. レスポンシブ調整
4. ユーザーから「改行がおかしい」と指摘された時
5. 最終QA
6. カード内コピー・Feature / Service / About / Conceptの大型コピー実装
7. 顧客提出前のVisual QA

Agent側の短いルール例:

```text
日本語Webサイトのテキスト生成・実装・修正・QAでは japanese-web-typography Skill を必ず使用する。
特に375px / 390px / 430pxとDesktopの実際のカード幅で改行品質を確認し、不自然な助詞・固有名詞・文節・語尾・1〜2文字の孤立を残さないこと。Heroだけでなく全カード・Feature・Service・About・Conceptの大型コピーを実画面またはスクリーンショットでVisual QAし、問題があれば修正→再確認を繰り返すこと。
```
