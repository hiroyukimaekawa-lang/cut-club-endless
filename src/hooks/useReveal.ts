import { useEffect } from 'react'

/**
 * [data-reveal] を付けた要素を、画面に入ったタイミングで表示する。
 * prefers-reduced-motion: reduce の環境では監視自体を行わず、最初から表示する。
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      root.classList.add('reveal-off')
      return
    }

    root.classList.add('reveal-on')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    const targets = document.querySelectorAll('[data-reveal]')
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
