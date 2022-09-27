
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Body() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://webeetec.com/itsharks24/blog/api/getposts.php`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [])


    return (
        <div>
            <section class="container mt-5">
                <div class="wrapper clear">

                    <div class="clear"></div>
                    <div class="contentLeft">
                        <div class="blogPostListWrap">


                            {loading && <div>A moment please...</div>}
                            {error && (
                                <div>{`There is a problem fetching the post data - ${error}`}</div>
                            )}

                            {data &&
                                data.map(({ id, title, description, image, category, writer, date, status }) => (
                                    <div class="blogPostListItem clear" key={id}>
                                        <a href="single.html" class="blogPostListImg">
                                            <Link to={`single/${id}`} >
                                                <img src={`./images/content/postImg${id}.jpg`} alt={title} />
                                            </Link>

                                        </a>
                                        <div class="blogPostListText">
                                            <div class="blogPostListTime">{date}</div>
                                            <h3><Link to={`single/${id}`}>{title} <br /> {status}</Link></h3>
                                            <p>{description}</p>
                                        </div>

                                    </div>
                                ))}


                        </div>










                        <div class="postPagination">
                            <ul class="clear">
                                <li class="newPosts"><Link to={"/"}>New posts</Link></li>
                                <li class="olderPosts"><Link to={"/"}>Older posts</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="sidebarRight">
                        <div class="sidebar-widget">
                            <h3>About us</h3>
                            <div class="aboutMeWidget">
                                <img src="images/ourlogo.png" alt="Francoise img" />
                                <p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
                            </div>
                        </div>
                        <div class="sidebar-widget">
                            <h3>follow me</h3>
                            <div class="followMeSocialLinks">
                                <a href="/"><i class="fa fa-instagram"></i></a>
                                <span></span>
                                <a href="/"><i class="fa fa-facebook"></i></a>
                                <span></span>
                                <a href="/"><i class="fa fa-twitter"></i></a>
                                <span></span>
                                <a href="/"><i class="fa fa-heart"></i></a>
                                <span></span>
                                <a href="/"><i class="fa fa-pinterest"></i></a>
                                <span></span>
                                <a href="/"><i class="fa fa-google-plus"></i></a>
                            </div>
                        </div>

                        <div class="sidebar-widget">
                            <h3>Recent post</h3>
                            <div class="popularPostsWidget">
                                <div class="popularPostsWidgetItem">
                                    <a href="/" class="popularPostsItemImg"><img src="images/content/popularPostImg.jpg" alt="Francoise img" /></a>
                                    <time datetime="2015-05-15">15.05.2015</time>
                                    <h4><a href="/">MY BEDSIDE TABLE: THE CURATOR</a></h4>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <div class="clear"></div>

            </section>




        </div>
    )
}

export default Body;