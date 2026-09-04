/**
 * メニュー。
 * 料金は未確定のため price は null のままにする（架空価格は禁止）。
 * TODO(owner): 正式料金が決まったら price に文字列を入れるだけで表示が切り替わります。
 *   例: { name: 'カット', price: '¥0,000' }
 */

export type MenuItem = {
  name: string
  /** 未確定のうちは null。確定したら '¥0,000' のような表記を入れる */
  price: string | null
  note?: string
}

export type MenuCategory = {
  no: string
  en: string
  ja: string
  /** 意味単位ごとの配列（語中での折り返しを防ぐ） */
  lead: string[]
  items: MenuItem[]
}

export const PRICE_TBD = '料金は確認後に掲載します'

export const menuCategories: MenuCategory[] = [
  {
    no: '01',
    en: 'Cut',
    ja: 'カット',
    lead: ['伸びかたの癖まで見ながら、', '次に来られるまでを考えて整えます。'],
    items: [
      { name: 'カット', price: null },
      { name: '前髪カット', price: null },
      { name: 'シャンプー・ブロー', price: null },
    ],
  },
  {
    no: '02',
    en: 'Color',
    ja: 'カラー',
    lead: ['普段の暮らしになじむ色を、', '髪の状態に合わせてご提案します。'],
    items: [
      { name: 'カラー', price: null },
      { name: 'リタッチカラー', price: null },
      { name: 'カット＋カラー', price: null },
    ],
  },
  {
    no: '03',
    en: 'Other',
    ja: 'その他メニュー',
    lead: ['気になることがあれば、', 'ご来店時にお気軽にご相談ください。'],
    items: [
      { name: 'パーマ', price: null },
      { name: 'トリートメント', price: null },
      { name: 'ヘアセット', price: null },
    ],
  },
]
