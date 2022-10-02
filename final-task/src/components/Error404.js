import { Link } from "react-router-dom"
function Error() {


    return (
        <body class="error404">
            <header id="header">
                <div class="siteHeader">
                    <div class="wrapper clear">
                        <Link to="index.html" class="mobile-logo">
                            <img src="images/mobile-logo.png" alt="Francoise img" />
                        </Link>
                        <ul class="mainMenu clear">
                            <li>
                                <Link to="index.html">home</Link>
                                <ul>
                                    <li><Link to="/">Home slider</Link></li>
                                    <li><Link to="/">Home fullsize</Link></li>
                                    <li><Link to="/">Home masonry</Link></li>
                                    <li><Link to="/">Home grid</Link></li>
                                    <li><Link to="/">Home list </Link></li>
                                    <li class="Error"><Link to="404.html">404 page</Link></li>
                                    <li><Link to="/">Single post</Link></li>
                                </ul>
                            </li>
                            <li><Link to="category.html">lifestyle</Link></li>
                            <li>
                                <Link to="category.html">travel</Link>
                                <ul>
                                    <li><Link to="/">Submenu one</Link></li>
                                    <li><Link to="/">Submenu two</Link></li>
                                    <li><Link to="/">Submenu three</Link></li>
                                    <li class="menu-item-has-children">
                                        <Link to="/">Submenu four</Link>
                                        <ul>
                                            <li><Link to="/">Submenu one</Link></li>
                                            <li><Link to="/">Submenu two</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><Link to="/">fashion</Link></li>
                            <li><Link to="/">inspiration</Link></li>
                            <li><Link to="/">about</Link></li>
                            <li><Link to="/">contact</Link></li>
                        </ul>
                        <div class="pull-right clear">
                            <div class="headerSocialLinks clear">
                                <Link to="/"><i class="fa fa-instagram"></i></Link>
                                <Link to="/"><i class="fa fa-facebook"></i></Link>
                                <Link to="/"><i class="fa fa-twitter"></i></Link>
                                <Link to="/"><i class="fa fa-heart"></i></Link>
                                <Link to="/"><i class="fa fa-pinterest"></i></Link>
                                <Link to="/"><i class="fa fa-google-plus"></i></Link>
                            </div>
                            <div class="searchIcon"></div>
                        </div>
                        <span class="showMobileMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                </div>
                <Link to="/" class="logo"><img src="images/logo.png" alt="Francoise img" /></Link>
            </header>
            <section class="container">
                <div class="page404Wrap">
                    <img src="images/404.png" alt="Francoise img" />
                    <p>The requested page has <br /> not been found</p>
                    <Link to="/" class="homePageLink">homepage</Link>
                </div>
                <div class="clear"></div>
                <div class="ourInstagram">
                    <div id="sb_instagram">
                        <div class="sb_instagram_header">
                            <Link to="/" class="sbi_header_link">Follow on instagram</Link>
                        </div>
                        <div id="sbi_images">
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="/" class="sbi_photo">
                                        <img src="images/content/inst.jpg" alt="Francoise img" />
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="/" class="sbi_photo">
                                        <img src="images/content/inst2.jpg" alt="Francoise img" />
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="/" class="sbi_photo">
                                        <img src="images/content/inst3.jpg" alt="Francoise img" />
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="/" class="sbi_photo">
                                        <img src="images/content/inst4.jpg" alt="Francoise img" />
                                    </Link>
                                </div>
                            </div>
                            <div class="sbi_item sbi_type_image">
                                <div class="sbi_photo_wrap">
                                    <Link to="/" class="sbi_photo">
                                        <img src="images/content/inst5.jpg" alt="Francoise img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer">
                <div class="footerSocial">
                    <div class="wrapper clear">
                        <div class="footerSocialItem">
                            <Link to="/" class="">
                                <i class="fa fa-instagram"></i>
                                Instagram <br />
                                10 537
                            </Link>
                        </div>
                        <div class="footerSocialItem">
                            <Link to="/" class="">
                                <i class="fa fa-facebook"></i>
                                facebook <br />
                                103 537
                            </Link>
                        </div>
                        <div class="footerSocialItem">
                            <Link to="/" class="">
                                <i class="fa fa-twitter"></i>
                                Twitter <br />
                                27 129
                            </Link>
                        </div>
                        <div class="footerSocialItem">
                            <Link to="/" class="">
                                <i class="fa fa-heart"></i>
                                bloglovin <br />
                                98 122
                            </Link>
                        </div>
                        <div class="footerSocialItem">
                            <Link to="/" class="">
                                <i class="fa fa-pinterest"></i>
                                Pinterest <br />
                                10 641
                            </Link>
                        </div>
                        <div class="footerSocialItem">
                            <Link to="/" class="">
                                <i class="fa fa-google-plus"></i>
                                google + <br />
                                17 324
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="wrapper">
                    <ul class="footerMenu">
                        <li><Link to="/">Lyfestyle</Link></li>
                        <li><Link to="/">travel</Link></li>
                        <li><Link to="/">fashion</Link></li>
                        <li><Link to="/">Inspiration</Link></li>
                        <li><Link to="/">about</Link></li>
                        <li><Link to="/">contact</Link></li>
                    </ul>
                    <p class="copyright">© 2015 Francoise</p>
                </div>
            </footer>
            <div class="mobileMenu">
                <div class="mobileSearch">
                    <form action="https://highseastudio.com/demo/francoise-html/index.html">
                        <input class="" type="text" name="" size="32" value="" placeholder="Search" />
                        <input class="" type="submit" value="" />
                    </form>
                </div>
                <ul>
                    <li>
                        <Link to="index.html">home</Link>
                        <ul>
                            <li><Link to="/">Home slider</Link></li>
                            <li><Link to="/">Home fullsize</Link></li>
                            <li><Link to="/">Home masonry</Link></li>
                            <li><Link to="/">Home grid</Link></li>
                            <li><Link to="/">Home list </Link></li>
                            <li class="current-menu-item"><Link to="404.html">404 page</Link></li>
                            <li><Link to="/">Single post</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">lifestyle</Link></li>
                    <li>
                        <Link to="/">travel</Link>
                        <ul>
                            <li><Link to="/">Submenu one</Link></li>
                            <li><Link to="/">Submenu two</Link></li>
                            <li><Link to="/">Submenu three</Link></li>
                            <li class="menu-item-has-children">
                                <Link to="/">Submenu four</Link>
                                <ul>
                                    <li><Link to="/">Submenu one</Link></li>
                                    <li><Link to="/">Submenu two</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="category.html">fashion</Link></li>
                    <li><Link to="category.html">inspiration</Link></li>
                    <li><Link to="about.html">about</Link></li>
                    <li><Link to="contact.html">contact</Link></li>
                </ul>
                <div class="mobileSocial clear">
                    <Link to="/"><i class="fa fa-instagram"></i></Link>
                    <Link to="/"><i class="fa fa-facebook"></i></Link>
                    <Link to="/"><i class="fa fa-twitter"></i></Link>
                    <Link to="/"><i class="fa fa-heart"></i></Link>
                    <Link to="/"><i class="fa fa-pinterest"></i></Link>
                    <Link to="/"><i class="fa fa-google-plus"></i></Link>
                </div>
            </div>
            <div class="searchPopup">
                <span class="closeBtn"></span>
                <div class="wrapper">
                    <form action="https://highseastudio.com/demo/francoise-html/index.html">
                        <input class="" type="text" name="" size="32" value="" placeholder="Search" />
                    </form>
                </div>
            </div>

        </body>
    )
}

export default Error;