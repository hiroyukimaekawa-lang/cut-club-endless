import { Figure } from './Figure'
import { SectionHead } from './SectionHead'
import { salonGallery } from '../data/gallery'

export function Salon() {
  return (
    <section className="section section--salon" id="salon" aria-labelledby="salon-title">
      <div className="container">
        <SectionHead no="05" en="SALON" ja="店内の様子" />

        <h2 className="display display--sm" id="salon-title" data-reveal>
          <span className="h-line">お店の空気が、</span>
          <span className="h-line">少しでも伝わるように。</span>
        </h2>

        <p className="section-lead" data-reveal>
          <span className="keep">外観から店内の様子まで、</span>
          <span className="keep">撮影ができ次第</span>
          <span className="keep">掲載していきます。</span>
        </p>
      </div>

      <div className="container container--wide">
        <ul className="salon-grid" data-reveal>
          {salonGallery.map((photo, i) => (
            <li className="salon-grid__item" key={photo.placeholder}>
              <Figure image={photo} ratio={photo.ratio} tone={((i % 3) + 1) as 1 | 2 | 3} />
              <p className="salon-grid__caption">
                <span className="salon-grid__caption-ja nowrap">{photo.caption}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
