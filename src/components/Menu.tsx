import { Phrases } from './Phrases'
import { SectionHead } from './SectionHead'
import { PRICE_TBD, menuCategories } from '../data/menu'

export function Menu() {
  return (
    <section className="section section--menu" id="menu" aria-labelledby="menu-title">
      <div className="container">
        <SectionHead no="04" en="SALON MENU" ja="メニュー" />

        <h2 className="display" id="menu-title" data-reveal>
          <span className="h-line">毎日の中で、</span>
          <span className="h-line">無理なく続けられるメニューを。</span>
        </h2>

        <p className="section-lead" data-reveal>
          <span className="keep">ご希望をうかがいながら、</span>
          <span className="keep">髪の状態に合わせて</span>
          <span className="keep">ご提案します。</span>
        </p>

        <div className="menu-list">
          {menuCategories.map((category) => (
            <section className="menu-block" key={category.no} data-reveal aria-label={category.ja}>
              <header className="menu-block__head">
                <p className="menu-block__no" aria-hidden="true">
                  {category.no}
                </p>
                <h3 className="menu-block__title">
                  <span className="menu-block__ja nowrap">{category.ja}</span>
                  <span className="menu-block__en nowrap">{category.en}</span>
                </h3>
                <p className="menu-block__lead">
                  <Phrases lines={category.lead} />
                </p>
              </header>

              <ul className="menu-items">
                {category.items.map((item) => (
                  <li className="menu-item" key={item.name}>
                    <span className="menu-item__name">{item.name}</span>
                    <span className="menu-item__dots" aria-hidden="true" />
                    <span className={`menu-item__price${item.price ? '' : ' is-tbd'}`}>
                      {item.price ?? 'PRICE / COMING SOON'}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="note" data-reveal>
          <span className="keep">{PRICE_TBD}。</span>
          <span className="keep">メニュー内容も、確定後に更新します。</span>
        </p>
      </div>
    </section>
  )
}
