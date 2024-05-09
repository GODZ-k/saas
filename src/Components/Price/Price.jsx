import React from 'react'
import PriceWrapper from './PriceWrapper'

function Price() {
  return (
    <section className="section-white section-top-border" id="pricing">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center padding-bottom-40">
                    <h2 className="section-title">Pricing for every business, at any stage</h2>
                    <p className="section-subtitle">All pricing packages are backed up by a 30-day money back guarantee.</p>
                </div>
            </div>
        </div>
        <div className="pricing-wrapper">
            <div className=" px-[8%]">
                <div className="row flex justify-center items-center flex-wrap">
                    <PriceWrapper title="STANDARD" price="$99" subtitle="Per Month" text="All Basic features" f1="15 Mailboxes, 50 Gb Storage" f2="Interactive Screen Sharing" f3="Full Reports History" tag="FREE 15-DAY TRIAL"/>
                    <PriceWrapper title="STANDARD" price="$99" subtitle="Per Month" text="All Basic features" f1="15 Mailboxes, 50 Gb Storage" f2="Interactive Screen Sharing" f3="Full Reports History" tag="FREE 15-DAY TRIAL"/>
                    <PriceWrapper title="STANDARD" price="$99" subtitle="Per Month" text="All Basic features" f1="15 Mailboxes, 50 Gb Storage" f2="Interactive Screen Sharing" f3="Full Reports History" tag="FREE 15-DAY TRIAL"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Price