import { Figure } from './Figure'
import { SectionHead } from './SectionHead'
import { styleGallery } from '../data/gallery'

export function StyleGallery() {
  return (
    <section className="section section--style" id="style" aria-labelledby="style-title">
      <div className="container">
        <SectionHead no="03" en="STYLE GALLERY" ja="スタイル" />

        <h2 className="display display--sm" id="style-title" data-reveal>
          <span className="h-line">いつもの自分を、</span>
          <span className="h-line">少しだけ心地よく。</span>
        </h2>

        <p className="section-lead" data-reveal>
          <span className="keep">お店で仕上げたスタイルは、</span>
          <span className="keep">順次このページに掲載していきます。</span>
        </p>
      </div>

      <div className="container container--wide">
        <ul className="style-grid" data-reveal>
          {styleGallery.map((image, i) => (
            <li className="style-grid__item" key={image.placeholder}>
              <Figure image={image} ratio="4 / 5" tone={((i % 3) + 1) as 1 | 2 | 3} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
