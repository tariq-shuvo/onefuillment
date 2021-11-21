import React, {useState} from 'react'
import Link  from 'next/link'

const Header = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <nav className="navbar navbar-expand-lg header-nav">
            <div className={showDropDown?"container nav-container display_menu": "container nav-container"}>
                <a className="navbar-brand" href="#">Onefuillment</a>
                <div
                id="hamburger"
                className="d-lg-none navbar-toggler order-0 order-md-1"
                data-toggle="collapse"
                data-target="#top-nav"
                aria-controls="top-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={()=> setShowDropDown(!showDropDown)}
                >
                <span></span>
                <span></span>
                <span></span>
                </div>
                {showDropDown && (
                    <div className="collapse navbar-collapse custom-navbar">
                        <ul className="navbar-nav ml-auto d-flex align-items-lg-center">
                            <Link href="/">
                                <li className="nav-item active">
                                    <a className="nav-link"
                                        >Product <span className="sr-only">(current)</span></a
                                    >
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link">Integration</a>
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link">About</a>
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link">Pricing</a>
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link">Blog</a>
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link">Login</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                )}
                <div className="collapse navbar-collapse custom-navbar" id="top-nav">
                        <ul className="navbar-nav ml-auto d-flex align-items-lg-center">
                            <Link href="/">
                                <li className="nav-item active">
                                    <a className="nav-link"
                                        >Product <span className="sr-only">(current)</span></a
                                    >
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link">Integration</a>
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link">About</a>
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link">Pricing</a>
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link">Blog</a>
                                </li>
                            </Link>
                            <Link href="/">
                                <li className="nav-item">
                                    <a className="nav-link">Login</a>
                                </li>
                            </Link>
                        </ul>                    
                </div>
            </div>
        </nav>
    )
}

export default Header
