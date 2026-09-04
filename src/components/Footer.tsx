import { navItems, shop } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__ja nowrap">{shop.nameJa}</p>
          <p className="footer__en nowrap">{shop.nameEn}</p>
          <p className="footer__msg">
            <span className="keep">気軽に通えて、</span>
            <span className="keep">また来たくなる場所へ。</span>
          </p>
        </div>

        <nav className="footer__nav" aria-label="フッターナビゲーション">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className="footer__nav-en">{item.en}</span>
                  <span className="footer__nav-ja nowrap">{item.ja}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="footer__copy">
        <small>&copy; {new Date().getFullYear()} {shop.nameJa}</small>
      </p>
    </footer>
  )
}
