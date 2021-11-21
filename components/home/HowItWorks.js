import React from 'react'
import Link  from 'next/link'

const HowItWorks = () => {
    return (
        <section className="sec-wrapper how-it-works py-100 bg-optional-1">
            <div className="container">
                <div className="sec-header text-center mb-5">
                <h1 className="sec-title text-capitalize text-white">How It Works</h1>
                <p className="sec-text text-white">
                    Buyer direct mailing infrastructure value proposition partner
                    network investor interaction design. Business plan ramen.
                </p>
                </div>
                <div className="sec-body">
                <div className="row">
                    <div
                    className="col-sm-6 col-lg-4 mb-4 mb-lg-0 text-center text-sm-left"
                    >
                    <div className="col-item text-white">
                        <img
                        src="/images/warehouse.png"
                        alt="warehouse"
                        className="img-fluid"
                        />
                        <h2 className="mt-4 mb-3 secondary-title">Warehouse</h2>
                        <p>
                        Buyer direct mailing infrastructure value proposition partner
                        network.
                        </p>
                    </div>
                    </div>
                    <div
                    className="col-sm-6 col-lg-4 mb-4 mb-lg-0 text-center text-sm-left"
                    >
                    <div className="col-item text-white">
                        <img
                        src="/images/logistics.png"
                        alt="warehouse"
                        className="img-fluid"
                        />
                        <h2 className="mt-4 mb-3 secondary-title">Logistics</h2>
                        <p>
                        Buyer direct mailing infrastructure value proposition partner
                        network.
                        </p>
                    </div>
                    </div>
                    <div
                    className="col-sm-6 col-lg-4 mb-4 mb-lg-0 text-center text-sm-left"
                    >
                    <div className="col-item text-white">
                        <img src="/images/house.png" alt="warehouse" className="img-fluid" />
                        <h2 className="mt-4 mb-3 secondary-title">Flow picture</h2>
                        <p>
                        Buyer direct mailing infrastructure value proposition partner
                        network.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
