import React, { useEffect, useState } from 'react'
import i1 from './images/content/inst.jpg';
import i2 from './images/content/inst2.jpg';
import i3 from './images/content/inst3.jpg';
import i4 from './images/ourlogo.png';
import i5 from './images/content/inst4.jpg';
import i6 from './images/content/inst5.jpg';
import i7 from './images/content/instagramWidgetItem7.jpg';
import i8 from './images/content/instagramWidgetItem8.jpg';
import i9 from './images/content/instagramWidgetItem9.jpg';

const Courses = () => {

    const [data, setData] = useState();


    useEffect(() => {
        const getData = async () => {

            const response = await fetch(`https://webeetec.com/itsharks24/blog/api/getcategory.php`);
            let actualData = await response.json();
            const fil = actualData.filter((post) => {
                return post.name === "Courses";
            })
            console.log(fil);






        }

        getData();
    }, [])






    return (
        <div>

            <body className="single-post">

                <section className="container">
                    <div className="wrapper clear">
                        <div className="contentLeft">
                            <div className="singlePostMeta">
                                <div className="singlePostTime">15.05.2015</div>
                                <h1>CHOCOLATE-COVERED ESPRESSO BEAN BROWNIES</h1>
                                <a href="/" className="singlePostCategory">Lifestyle</a>
                            </div>


                            <h1 style={{ color: 'white', backgroundColor: 'yellowgreen', textAlign: 'center' }}>Category is Courses</h1>

                            {/*this code working but need speed save data */}
                            {/* { 
                                data.map((p) => {
                                    return (
                                        <div className="singlePostWrap" key={p.id}>
                                            <div className="singlePostImg">
                                                <img src={`${p.image}`} alt="Francoise img" />
                                            </div>
                                            <h1>{`Category : ${p.name}`}</h1>
                                            <h1>{`Date : ${p.date}`}</h1>
                                        </div>
                                    )
                                }) 

                            } */}














                            <div className="pageSocial">
                                <div className="pageSocialWrapper">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>

                            <div className="relatedPostsBox">
                                <h3>related posts</h3>
                                <div className="relatedPostsWrap clear">
                                    <a href="/" className="relatedPostItem">
                                        <img src={i1} alt="Francoise img" />
                                        <div className="overlayBox">
                                            <div className="relatedPostDesc">
                                                <div className="postTime">15.05.2015</div>
                                                <h4>MY BEDSIDE TABLE: THE CURATOR</h4>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" className="relatedPostItem">
                                        <img src={i2} alt="Francoise img" />
                                        <div className="overlayBox">
                                            <div className="relatedPostDesc">
                                                <div className="postTime">15.05.2015</div>
                                                <h4>MY BEDSIDE TABLE: THE CURATOR</h4>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/" className="relatedPostItem">
                                        <img src={i3} alt="Francoise img" />
                                        <div className="overlayBox">
                                            <div className="relatedPostDesc">
                                                <div className="postTime">15.05.2015</div>
                                                <h4>MY BEDSIDE TABLE: THE CURATOR</h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="sidebarRight">
                            <div className="sidebar-widget">
                                <h3>About us</h3>
                                <div className="aboutMeWidget">
                                    <img src={i4} alt="Francoise img" />
                                    <p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
                                </div>
                            </div>
                            <div className="sidebar-widget">
                                <h3>follow me</h3>
                                <div className="followMeSocialLinks">
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                    <span></span>
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <span></span>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <span></span>
                                    <a href="/"><i className="fa fa-heart"></i></a>
                                    <span></span>
                                    <a href="/"><i className="fa fa-pinterest"></i></a>
                                    <span></span>
                                    <a href="/"><i className="fa fa-google-plus"></i></a>
                                </div>
                            </div>

                            <div className="sidebar-widget">
                                <h3>Recent post</h3>
                                <div className="popularPostsWidget">
                                    <div className="popularPostsWidgetItem">
                                        <a href="/" className="popularPostsItemImg">
                                            <img src={i9} alt="Francoise img" /></a>
                                        <time datetime="2015-05-15">15.05.2015</time>
                                        <h4><a href="/">MY BEDSIDE TABLE: THE CURATOR</a></h4>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="ourInstagram">
                        <div id="sb_instagram">
                            <div className="sb_instagram_header">
                                <a href="/" className="sbi_header_link">Follow on instagram</a>
                            </div>
                            <div id="sbi_images">
                                <div className="sbi_item sbi_type_image">
                                    <div className="sbi_photo_wrap">
                                        <a href="/" className="sbi_photo">
                                            <img src={i9} alt="Francoise img" />
                                        </a>
                                    </div>
                                </div>
                                <div className="sbi_item sbi_type_image">
                                    <div className="sbi_photo_wrap">
                                        <a href="/" className="sbi_photo">
                                            <img src={i8} alt="Francoise img" />
                                        </a>
                                    </div>
                                </div>
                                <div className="sbi_item sbi_type_image">
                                    <div className="sbi_photo_wrap">
                                        <a href="/" className="sbi_photo">
                                            <img src={i5} alt="Francoise img" />
                                        </a>
                                    </div>
                                </div>
                                <div className="sbi_item sbi_type_image">
                                    <div className="sbi_photo_wrap">
                                        <a href="/" className="sbi_photo">
                                            <img src={i6} alt="Francoise img" />
                                        </a>
                                    </div>
                                </div>
                                <div className="sbi_item sbi_type_image">
                                    <div className="sbi_photo_wrap">
                                        <a href="/" className="sbi_photo">
                                            <img src={i7} alt="Francoise img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer id="footer">
                    <div className="footerSocial">
                        <div className="wrapper clear">
                            <div className="footerSocialItem">
                                <a href="/" className="">
                                    <i className="fa fa-instagram"></i>
                                    Instagram <br />
                                    10 537
                                </a>
                            </div>
                            <div className="footerSocialItem">
                                <a href="/" className="">
                                    <i className="fa fa-facebook"></i>
                                    facebook <br />
                                    103 537
                                </a>
                            </div>
                            <div className="footerSocialItem">
                                <a href="/" className="">
                                    <i className="fa fa-twitter"></i>
                                    Twitter <br />
                                    27 129
                                </a>
                            </div>
                            <div className="footerSocialItem">
                                <a href="/" className="">
                                    <i className="fa fa-heart"></i>
                                    bloglovin <br />
                                    98 122
                                </a>
                            </div>
                            <div className="footerSocialItem">
                                <a href="/" className="">
                                    <i className="fa fa-pinterest"></i>
                                    Pinterest <br />
                                    10 641
                                </a>
                            </div>
                            <div className="footerSocialItem">
                                <a href="/" className="">
                                    <i className="fa fa-google-plus"></i>
                                    google + <br />
                                    17 324
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <ul className="footerMenu">
                            <li><a href="category.html">Lyfestyle</a></li>
                            <li><a href="category.html">travel</a></li>
                            <li><a href="category.html">fashion</a></li>
                            <li><a href="category.html">Inspiration</a></li>
                            <li><a href="about.html">about</a></li>
                            <li><a href="contact.html">contact</a></li>
                        </ul>
                        <p className="copyright">© 2015 Francoise</p>
                    </div>
                </footer>
                <div className="mobileMenu">
                    <div className="mobileSearch">
                        <form action="https://highseastudio.com/demo/francoise-html/index.html">
                            <input className="" type="text" name="" size="32" value="" placeholder="Search" />
                            <input className="" type="submit" value="" />
                        </form>
                    </div>

                    <ul>
                        <li>
                            <a href="index.html">home</a>
                            <ul>
                                <li><a href="index-slider.html">Home slider</a></li>
                                <li><a href="index-fullsize.html">Home fullsize</a></li>
                                <li><a href="index-masonry.html">Home masonry</a></li>
                                <li><a href="index-grid.html">Home grid</a></li>
                                <li><a href="index-list.html">Home list </a></li>
                                <li><a href="404.html">404 page</a></li>
                                <li className="current-menu-item"><a href="single-post.html">Single post</a></li>
                            </ul>
                        </li>
                        <li><a href="category.html">lifestyle</a></li>
                        <li>
                            <a href="category.html">travel</a>
                            <ul>
                                <li><a href="/">Submenu one</a></li>
                                <li><a href="/">Submenu two</a></li>
                                <li><a href="/">Submenu three</a></li>
                                <li className="menu-item-has-children">
                                    <a href="/">Submenu four</a>
                                    <ul>
                                        <li><a href="/">Submenu one</a></li>
                                        <li><a href="/">Submenu two</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="category.html">fashion</a></li>
                        <li><a href="category.html">inspiration</a></li>
                        <li><a href="about.html">about</a></li>
                        <li><a href="contact.html">contact</a></li>
                    </ul>
                    <div className="mobileSocial clear">
                        <a href="/"><i className="fa fa-instagram"></i></a>
                        <a href="/"><i className="fa fa-facebook"></i></a>
                        <a href="/"><i className="fa fa-twitter"></i></a>
                        <a href="/"><i className="fa fa-heart"></i></a>
                        <a href="/"><i className="fa fa-pinterest"></i></a>
                        <a href="/"><i className="fa fa-google-plus"></i></a>
                    </div>
                </div>
                <div className="searchPopup">
                    <span className="closeBtn"></span>
                    <div className="wrapper">
                        <form action="https://highseastudio.com/demo/francoise-html/index.html">
                            <input className="" type="text" name="" size="32" value="" placeholder="Search" />
                        </form>
                    </div>
                </div>

            </body>


        </div>
    )
}

export default Courses;
