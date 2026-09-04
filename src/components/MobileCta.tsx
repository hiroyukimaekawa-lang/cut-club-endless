import { useEffect, useState } from 'react'

/** モバイル下部の控えめな予約導線。ヒーローを過ぎてから表示する */
export function MobileCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`mobile-cta${show ? ' is-visible' : ''}`} aria-hidden={!show}>
      <a className="mobile-cta__btn" href="#reservation" tabIndex={show ? 0 : -1}>
        ご予約について
      </a>
    </div>
  )
}
