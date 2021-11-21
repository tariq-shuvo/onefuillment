import React from 'react'
import Link  from 'next/link'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container banner-container d-flex align-items-center">
                <div className="row align-items-center">
                <div className="col-lg-6 pb-5">
                    <h1 className="banner-heading">
                    Fulfillment Built for e-Commerce at scale
                    </h1>
                    <p className="banner-text">
                    Buyer direct mailing infrastructure value proposition partner
                    network investor interaction design. Business plan ramen mass
                    market strategy first mover advantage entrepreneur new seller have
                    benift facebook.
                    </p>
                    <a href="/" className="btn btn-theme-white-outline text-white">
                    Request a Demo
                    </a>
                </div>
                <div className="col-lg-6 banner-image">
                    <img
                    src="/images/banner.png"
                    alt="banner-image"
                    className="img-fluid w-100"
                    />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
