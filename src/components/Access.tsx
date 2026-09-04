import { SectionHead } from './SectionHead'
import { UNCONFIRMED_LABEL, shop, shopInfo } from '../data/site'

/** 未確認の項目は推測せず「確認中」と表示する */
function Value({ value }: { value: string | null }) {
  if (!value) return <span className="tbd">{UNCONFIRMED_LABEL}</span>
  return <>{value}</>
}

export function Access() {
  const { address, tel, hours, closed, parking, mapUrl } = shopInfo

  return (
    <section className="section section--access" id="access" aria-labelledby="access-title">
      <div className="container">
        <SectionHead no="07" en="ACCESS" ja="アクセス" />

        <h2 className="display display--sm" id="access-title" data-reveal>
          <span className="h-line">お近くにお越しの際は、</span>
          <span className="h-line">気軽にお立ち寄りください。</span>
        </h2>

        <div className="access-grid">
          <div className="access-info" data-reveal>
            <dl className="info-list">
              <div className="info-row">
                <dt>店名</dt>
                <dd>
                  <span className="nowrap">{shop.nameJa}</span>
                  <span className="info-en nowrap">{shop.nameEn}</span>
                </dd>
              </div>
              <div className="info-row">
                <dt>住所</dt>
                <dd>
                  <Value value={address} />
                </dd>
              </div>
              <div className="info-row">
                <dt>電話番号</dt>
                <dd>
                  <Value value={tel} />
                </dd>
              </div>
              <div className="info-row">
                <dt>営業時間</dt>
                <dd>
                  <Value value={hours} />
                </dd>
              </div>
              <div className="info-row">
                <dt>定休日</dt>
                <dd>
                  <Value value={closed} />
                </dd>
              </div>
              <div className="info-row">
                <dt>駐車場</dt>
                <dd>
                  <Value value={parking} />
                </dd>
              </div>
            </dl>

            <p className="note">
              <span className="keep">店舗情報は確認でき次第、</span>
              <span className="keep">こちらに掲載します。</span>
            </p>
          </div>

          {/* TODO(owner): Google Maps の埋め込みURLが確定したら shopInfo.mapUrl に設定する */}
          <div className="access-map" data-reveal>
            {mapUrl ? (
              <iframe
                className="access-map__frame"
                src={mapUrl}
                title={`${shop.nameJa}の地図`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="access-map__ph" role="img" aria-label="地図は準備中です">
                <span className="access-map__ph-label" aria-hidden="true">
                  MAP
                </span>
                <span className="access-map__ph-note" aria-hidden="true">
                  地図は準備中
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
