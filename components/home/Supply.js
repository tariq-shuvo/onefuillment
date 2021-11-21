import React from 'react'
import Link  from 'next/link'

const Supply = () => {
    return (
        <section className="sec-wrapper supply-chain py-100 bg-optional-1 pos-relative">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className="sec-header text-center text-md-left">
                    <h1 className="sec-title text-capitalize text-white">
                    Onefuillment Software for Your Supply Chain
                    </h1>
                    <p className="sec-text text-white">
                    To survive in today‘s market and to have the competitive edge,
                    the use of the right technology is essential for any business.
                    Your global supply chain is complex, dispersed and
                    multi-faceted, yet your ability to manage it effectively is
                    critical to the success.
                    </p>
                    <div className="mt-4">
                    <a href="/" className="btn btn-theme-secondary text-white"
                        >Learn More</a>
                    </div>
                </div>
                </div>
                <div className="col-md-6">&nbsp;</div>
            </div>
            </div>
            <div className="pos-right-center d-none d-md-block">
            <img
                src="/images/supply-chain.png"
                alt="supply chain"
                className="img-fluid w-100"
            />
            </div>
      </section>
    )
}

export default Supply
