import { Figure } from './Figure'
import { heroImage, shop } from '../data/site'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow nowrap">{shop.nameEn}</p>

          <h1 className="hero__title" id="hero-title">
            <span className="h-line">気軽に通えて、</span>
            <span className="h-line">また来たくなる場所へ。</span>
          </h1>

          <p className="hero__lead">
            <span className="keep">一人ひとりに丁寧に向き合い、</span>
            <span className="keep">毎日の「ちょうどいい」を</span>
            <span className="keep">整えるサロンです。</span>
          </p>

          <p className="hero__actions">
            <a className="btn btn--primary" href="#reservation">
              ご予約はこちら
            </a>
            <a className="btn btn--ghost" href="#access">
              店舗情報を見る
            </a>
          </p>
        </div>

        <div className="hero__visual">
          <Figure image={heroImage} ratio="4 / 5" tone={1} loading="eager" className="hero__figure" />
        </div>
      </div>

      <a className="hero__scroll" href="#greeting" aria-label="次のセクションへ">
        <span className="hero__scroll-label" aria-hidden="true">
          SCROLL
        </span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}
