import React from 'react'
import Head from 'next/head'
import Header from './common/Header';
import Footer from './common/Footer';

const Layout = ({ title, keywords, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content={description}
                />
                <meta
                name="keywords"
                content={keywords}
                />
                <meta
                property="og:image"
                content={``}
                />
                <meta name="og:title" content={title} />
                <meta name="twitter:card" content={``} />
                {/* bootstrap cdn */}
                <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                crossOrigin="anonymous"
                />
                <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
                />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: "oneauto.us",
    description: "We're more than just a platform. As your partner in e-commerce success, we're here to help you efficiently acquire more customers and increase sales. Since 2001, our leading",
    keywords: '',
};

export default Layout
