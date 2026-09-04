import { useEffect, useState } from 'react'
import { navItems, shop } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.classList.add('is-locked')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <div className="header__inner">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <span className="brand__ja nowrap">{shop.nameJa}</span>
            <span className="brand__en nowrap">{shop.nameEn}</span>
          </a>

          <nav className="nav-desktop" aria-label="メインナビゲーション">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>
                    <span className="nav-desktop__en">{item.en}</span>
                    <span className="nav-desktop__ja nowrap">{item.ja}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-toggle__bars" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="menu-toggle__label">{open ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </header>

      {/*
        ドロワーは header の外に置く。
        header に backdrop-filter があると position: fixed の基準が header 自身になり、
        全画面に広がらなくなるため。
      */}
      <div className="drawer" id="site-menu" hidden={!open}>
        <nav className="drawer__nav" aria-label="サイト内メニュー">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                  <span className="drawer__en">{item.en}</span>
                  <span className="drawer__ja nowrap">{item.ja}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="drawer__foot">
          <span className="nowrap">{shop.nameJa}</span>
          <span className="drawer__foot-en nowrap">{shop.nameEn}</span>
        </p>
      </div>
    </>
  )
}
