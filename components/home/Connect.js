import React from 'react'
import Link  from 'next/link'

const Connect = () => {
    return (
        <section className="sec-wrapper connect-apps py-100 pos-relative">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                <img
                    src="/images/app-solar.PNG"
                    alt="connect apps"
                    className="img-fluid"
                />
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                <div className="sec-header text-center text-md-left mb-5">
                    <h1 className="sec-title text-capitalize">
                    Connect to your favorite apps
                    </h1>
                    <p className="sec-text">
                    To survive in today‘s market and to have the competitive edge,
                    the use of the right technology is essential for any business.
                    Your global supply chain is complex,
                    </p>
                    <div className="mt-4">
                    <a href="/" className="btn btn-theme-secondary text-white"
                        >Learn More</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </section>
    )
}

export default Connect
