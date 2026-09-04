import type { CSSProperties } from 'react'
import type { ImageSlot } from '../data/site'

type Props = {
  image: ImageSlot
  /** CSS aspect-ratio（例: '4 / 5'） */
  ratio?: string
  className?: string
  /** 画像未設定時のプレースホルダーの色味バリエーション（1-3） */
  tone?: 1 | 2 | 3
  loading?: 'lazy' | 'eager'
}

/**
 * 写真枠。
 * image.src が入れば実写真、null の間はデザインを崩さないプレースホルダーを表示する。
 * 差し替えは src/data/*.ts の src を埋めるだけ。
 */
export function Figure({ image, ratio = '4 / 5', className = '', tone = 1, loading = 'lazy' }: Props) {
  return (
    <div
      className={`figure figure--tone${tone} ${className}`.trim()}
      /* 比率はCSS変数で渡し、メディアクエリ側から上書きできるようにする */
      style={{ '--ratio': ratio } as CSSProperties}
    >
      {image.src ? (
        <img className="figure__img" src={image.src} alt={image.alt} loading={loading} decoding="async" />
      ) : (
        <div className="figure__ph" role="img" aria-label={`${image.alt}（写真は準備中）`}>
          <span className="figure__ph-label" aria-hidden="true">
            {image.placeholder}
          </span>
          <span className="figure__ph-note" aria-hidden="true">
            準備中
          </span>
        </div>
      )}
    </div>
  )
}
