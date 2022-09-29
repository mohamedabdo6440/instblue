
import { Link } from "react-router-dom"
export function Navbar({ categores }) {

    return (
        <header id="header">
            <div className="siteHeader">
                <div className="wrapper clear">
                    <Link to="index.html" className="mobile-logo">
                    </Link>
                    <ul className="mainMenu clear">
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link>Category</Link>
                            <ul>

                                {
                                    categores.map((cate) => {
                                        return (

                                            <li><Link to={`${cate}`}>{cate}</Link></li>
                                        )
                                    })
                                }

                            </ul>
                        </li>

                    </ul>
                    <div className="pull-right clear">
                        <div className="headerSocialLinks clear">
                            <Link to="/"><i className="fa fa-instagram"></i></Link>
                            <Link to="/"><i className="fa fa-facebook"></i></Link>
                            <Link to="/"><i className="fa fa-twitter"></i></Link>
                            <Link to="/"><i className="fa fa-heart"></i></Link>
                            <Link to="/"><i className="fa fa-pinterest"></i></Link>
                            <Link to="/"><i className="fa fa-google-plus"></i></Link>
                        </div>
                        <div className="searchIcon"></div>
                    </div>
                    <span className="showMobileMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
            </div>
            <Link to="/" className="logo">IT SHARKS 24</Link>
        </header>
    )
}

