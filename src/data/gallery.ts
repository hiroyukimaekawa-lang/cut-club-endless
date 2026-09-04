import type { ImageSlot } from './site'

/**
 * スタイルギャラリー。
 * TODO(owner): 撮影したヘアスタイル写真を /public/images に置き、src を設定する。
 * src が入ると、そのままギャラリーとして完成します。
 */
export const styleGallery: ImageSlot[] = [
  { src: null, alt: 'ショートスタイルの仕上がり', placeholder: 'STYLE 01' },
  { src: null, alt: 'ミディアムスタイルの仕上がり', placeholder: 'STYLE 02' },
  { src: null, alt: 'ボブスタイルの仕上がり', placeholder: 'STYLE 03' },
  { src: null, alt: 'ロングスタイルの仕上がり', placeholder: 'STYLE 04' },
  { src: null, alt: 'カラーの仕上がり', placeholder: 'STYLE 05' },
  { src: null, alt: 'メンズカットの仕上がり', placeholder: 'STYLE 06' },
  { src: null, alt: 'パーマスタイルの仕上がり', placeholder: 'STYLE 07' },
  { src: null, alt: 'ヘアセットの仕上がり', placeholder: 'STYLE 08' },
]

export type SalonPhoto = ImageSlot & {
  caption: string
  /** CSS aspect-ratio の値 */
  ratio: string
}

/**
 * 店舗写真。
 * TODO(owner): 外観・店内・セット面・施術風景・オーナー・細部の写真を追加する。
 */
export const salonGallery: SalonPhoto[] = [
  { src: null, alt: '店舗の外観', caption: '外観', placeholder: 'FACADE', ratio: '4 / 3' },
  { src: null, alt: '店内の様子', caption: '店内', placeholder: 'INTERIOR', ratio: '4 / 5' },
  { src: null, alt: 'セット面', caption: 'セット面', placeholder: 'MIRROR', ratio: '4 / 5' },
  { src: null, alt: '施術の風景', caption: '施術風景', placeholder: 'STYLING', ratio: '4 / 3' },
  { src: null, alt: 'オーナーの人物写真', caption: 'オーナー', placeholder: 'OWNER', ratio: '4 / 5' },
  { src: null, alt: '店内の細部', caption: '店の細部', placeholder: 'DETAIL', ratio: '4 / 5' },
]
