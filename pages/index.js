import Head from 'next/head'
import slide1 from "../public/images/slide1.jpeg"
import slide2 from "../public/images/slide2.jpeg"
import slide3 from "../public/images/slide3.jpeg"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Spinner from '@/components/Spinner'

export default function Home() {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://strapi-backend-vhvp.onrender.com/api/blogs?sort=updatedAt:desc&pagination[limit]=3");
      const parsedData = await response.json();
      setLoading(false);
      setBlogs(parsedData.data);
    }
    fetchData();
  }, [])
  return (
    <>
      <Head>
        <title>NextBlog- managed by mdfaizanalam.tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={slide1} className="d-block w-100" alt="slide image" />
            <div className="carousel-caption d-none d-md-block">
              <h5>NextBlog</h5>
              <p>Thank you for checking out my blog website.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={slide2} className="d-block w-100" alt="slide image" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Next Level Blogs</h5>
              <p>NextBlog contains awesome blogs on wide variety of topics.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={slide3} className="d-block w-100" alt="slide image" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Initial Release</h5>
              <p>NextBlog is still under development and contains limited content for now.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className='text-center mt-5'>Latest Blogs</h2>
      {loading && <Spinner />}

      {blogs && <div className="container mt-5">
        <div className="row latest-section">
          {blogs.map((item) => {
            return (
              <div className="col-md-4 mb-3" key={item.id}>
                <div className="card">
                  <img src={item.attributes.blogImg} className="card-img-top" alt="blog image" />
                  <div className="card-body">
                    <h5 className="card-title">{item.attributes.title}</h5>
                    <h6 className="card-text">{item.attributes.description}</h6>
                    <p><small>{item.attributes.content.substr(0, 50)}... <Link href='/blogs'>Read More</Link></small></p>
                  </div>
                </div>
              </div>)
          })}
        </div>
        <div className="my-3 text-center">
          <Link href="/blogs">See all blogs</Link>
        </div>
      </div>}
    </>
  )
}
