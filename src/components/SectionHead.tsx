type Props = {
  no: string
  en: string
  ja: string
}

/** セクション番号＋英字ラベル＋日本語ラベル */
export function SectionHead({ no, en, ja }: Props) {
  return (
    <p className="sec-head" data-reveal>
      <span className="sec-head__no">{no}</span>
      <span className="sec-head__rule" aria-hidden="true" />
      <span className="sec-head__en">{en}</span>
      <span className="sec-head__ja">{ja}</span>
    </p>
  )
}
