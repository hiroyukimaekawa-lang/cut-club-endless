/**
 * 日本語の意味単位（文節）ごとに span で包み、語中での折り返しを防ぐ。
 * 文字数ではなく意味で区切ること。1つの単位は長くても14文字程度に収める。
 */
export function Phrases({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line) => (
        <span className="keep" key={line}>
          {line}
        </span>
      ))}
    </>
  )
}
