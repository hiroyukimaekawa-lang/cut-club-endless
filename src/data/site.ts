/**
 * サイト全体で使う情報。
 * 未確認の店舗情報は「確認中」のまま保持し、推測で埋めないこと。
 * 確定したら TODO(owner) のコメント箇所を書き換えるだけで反映されます。
 */

export type ImageSlot = {
  /** 画像を /public/images に置いたらパスを入れる（例: '/images/hero.jpg'） */
  src: string | null
  /** 画像の内容が伝わる日本語の代替テキスト */
  alt: string
  /** 画像が入るまで表示するプレースホルダーのラベル */
  placeholder: string
}

export const shop = {
  nameJa: 'カット倶楽部エンドレス',
  nameEn: 'CUT CLUB ENDLESS',
} as const

/** ナビゲーション。href は同一ページ内のアンカー */
export const navItems = [
  { id: 'greeting', en: 'Greeting', ja: 'ごあいさつ' },
  { id: 'identity', en: 'Identity', ja: '大切にしていること' },
  { id: 'style', en: 'Style', ja: 'スタイル' },
  { id: 'menu', en: 'Menu', ja: 'メニュー' },
  { id: 'salon', en: 'Gallery', ja: '店内の様子' },
  { id: 'access', en: 'Access', ja: 'アクセス' },
  { id: 'reservation', en: 'Reservation', ja: 'ご予約' },
] as const

/** TODO(owner): 店舗の外観／施術写真が届いたら src を設定する */
export const heroImage: ImageSlot = {
  src: null,
  alt: 'カット倶楽部エンドレスの店内。落ち着いた雰囲気のセット面。',
  placeholder: 'HERO PHOTO',
}

/** コンセプトの3つの柱。写真が入るまではプレースホルダー表示 */
export const identityPoints = [
  {
    no: '01',
    title: '一人ひとりに、丁寧に',
    /** 意味単位ごとの配列。改行位置を固定するのではなく、語中で折れないようにするためのもの */
    body: [
      '一人で向き合うサロンだからこそ、',
      '髪の悩みも、これからのイメージも、',
      '落ち着いてうかがえます。',
      '急がずに、その方に合う形を',
      '一緒に決めていきます。',
    ],
    image: {
      src: null,
      alt: 'カウンセリングの様子',
      placeholder: 'PHOTO 01',
    } satisfies ImageSlot,
  },
  {
    no: '02',
    title: '何度でも通いやすく',
    body: [
      '一度きりで終わらない関係を',
      '大切にしています。',
      '生活の負担にならない距離感と',
      '続けやすさを大事にしながら、',
      '次もまた、と思っていただける',
      'お店を目指しています。',
    ],
    image: {
      src: null,
      alt: '施術中の店内の様子',
      placeholder: 'PHOTO 02',
    } satisfies ImageSlot,
  },
  {
    no: '03',
    title: '無理なく、心地よく',
    body: [
      'ご予約の枠を調整しながら、',
      '一人ひとりを落ち着いて',
      'お迎えしています。',
      '慌ただしさのない時間の中で、',
      '髪を整えるひとときを',
      '過ごしていただけます。',
    ],
    image: {
      src: null,
      alt: '店内の待合スペース',
      placeholder: 'PHOTO 03',
    } satisfies ImageSlot,
  },
] as const

/**
 * 店舗情報。
 * TODO(owner): 住所・電話番号・営業時間・定休日・地図URL・予約URLが確定するまで
 * 値は null のままにする（サイト上は「確認中」と表示されます）。
 */
export const shopInfo = {
  address: null as string | null,
  tel: null as string | null,
  hours: null as string | null,
  closed: null as string | null,
  mapUrl: null as string | null,
  hotpepperUrl: null as string | null,
  parking: null as string | null,
} as const

export const UNCONFIRMED_LABEL = '確認中'
