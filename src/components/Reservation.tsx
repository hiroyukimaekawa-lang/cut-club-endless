import { Phrases } from './Phrases'
import { SectionHead } from './SectionHead'
import { shopInfo } from '../data/site'

export function Reservation() {
  const { hotpepperUrl, tel } = shopInfo

  return (
    <section className="section section--reservation" id="reservation" aria-labelledby="reservation-title">
      <div className="container">
        <SectionHead no="06" en="RESERVATION" ja="ご予約" />

        <h2 className="display" id="reservation-title" data-reveal>
          <span className="h-line">空いている時間に、</span>
          <span className="h-line">無理なくご予約いただけます。</span>
        </h2>

        <div className="prose prose--center" data-reveal>
          <p>
            <Phrases
              lines={[
                'ご予約はこれまでどおりの方法で',
                '承っています。',
                '落ち着いてお迎えできるよう',
                '予約枠を調整していますので、',
                'ご希望の日時はお早めに',
                'ご相談ください。',
              ]}
            />
          </p>
        </div>

        <div className="cta-row" data-reveal>
          {/* TODO(owner): Hot Pepper Beauty の予約URLが確定したら shopInfo.hotpepperUrl に設定する */}
          {hotpepperUrl ? (
            <a className="btn btn--primary btn--lg" href={hotpepperUrl} target="_blank" rel="noopener noreferrer">
              Hot Pepper Beautyで予約
            </a>
          ) : (
            <span className="btn btn--primary btn--lg is-disabled" role="link" aria-disabled="true">
              Hot Pepper Beautyで予約
              <span className="btn__note">リンクを確認中です</span>
            </span>
          )}

          {/* TODO(owner): 電話番号が確定したら shopInfo.tel に設定する（tel: リンクになります） */}
          {tel ? (
            <a className="btn btn--outline btn--lg" href={`tel:${tel.replace(/[^0-9+]/g, '')}`}>
              お電話でお問い合わせ
              <span className="btn__note">{tel}</span>
            </a>
          ) : (
            <span className="btn btn--outline btn--lg is-disabled" role="link" aria-disabled="true">
              お電話でお問い合わせ
              <span className="btn__note">電話番号を確認中です</span>
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
