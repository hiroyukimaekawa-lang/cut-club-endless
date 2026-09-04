import { Phrases } from './Phrases'
import { SectionHead } from './SectionHead'

/** 本文。意味単位の配列で持ち、語中での折り返しを防ぐ */
const greetingBody = [
  [
    '髪を整える時間が、',
    '少しだけ気持ちまで軽くなるように。',
    'カット倶楽部エンドレスは、',
    'そんな時間をお届けしたいと',
    '考えています。',
  ],
  [
    '一人ひとりのお客様と',
    '落ち着いて向き合い、',
    '今日ここへ来てよかったと',
    '思っていただけること。',
    'それを、いちばん大切にしています。',
  ],
  [
    '特別な日のためだけではなく、',
    '日常の中で気軽に立ち寄れる場所として。',
    'これからも長くお付き合いいただける',
    'お店であり続けたいと思っています。',
  ],
]

export function Greeting() {
  return (
    <section className="section section--greeting" id="greeting" aria-labelledby="greeting-title">
      <div className="container">
        <SectionHead no="01" en="GREETING" ja="ごあいさつ" />

        <h2 className="display" id="greeting-title" data-reveal>
          <span className="h-line">来てくださった方に、</span>
          <span className="h-line">笑顔で帰っていただけるように。</span>
        </h2>

        <div className="prose" data-reveal>
          {greetingBody.map((paragraph, i) => (
            <p key={i}>
              <Phrases lines={paragraph} />
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
