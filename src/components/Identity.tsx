import { Figure } from './Figure'
import { Phrases } from './Phrases'
import { SectionHead } from './SectionHead'
import { identityPoints } from '../data/site'

export function Identity() {
  return (
    <section className="section section--identity" id="identity" aria-labelledby="identity-title">
      <div className="container">
        <SectionHead no="02" en="IDENTITY" ja="大切にしていること" />

        <h2 className="display" id="identity-title" data-reveal>
          <span className="h-line">一度きりではなく、</span>
          <span className="h-line">何度でも通いたくなるお店へ。</span>
        </h2>

        <p className="section-lead" data-reveal>
          <span className="keep">派手さよりも、</span>
          <span className="keep">続けやすさを。</span>
          <span className="keep">日常のなかで無理なく通える距離感を、</span>
          <span className="keep">大切にしています。</span>
        </p>
      </div>

      <div className="points">
        {identityPoints.map((point, i) => (
          <article className={`point point--${i % 2 === 0 ? 'a' : 'b'}`} key={point.no} data-reveal>
            <div className="point__visual">
              <Figure image={point.image} ratio="4 / 5" tone={((i % 3) + 1) as 1 | 2 | 3} />
            </div>
            <div className="point__body">
              <p className="point__no" aria-hidden="true">
                {point.no}
              </p>
              <h3 className="point__title nowrap-sm">{point.title}</h3>
              <p className="point__text">
                <Phrases lines={point.body} />
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
