import React from 'react'
import { useEffect, useState } from 'react'
import Blog from '@/components/Blog'
import BlogContent from '@/components/BlogContent'
import { Inter } from 'next/font/google'
import Spinner from '@/components/Spinner'

const inter = Inter({ subsets: ['latin'] })

export default function blogs() {
  const [blogs, setBlogs] = useState();
  const [blogLoad, setBlogLoad] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://strapi-backend-vhvp.onrender.com/api/blogs");
      const parsedData = await response.json();
      setLoading(false);
      setBlogs(parsedData.data);
    }
    fetchData();
  }, [])
  return (
    <>
      <h1 className='text-center my-5'>Welcome to all blogs page!</h1>
      {loading && <Spinner />}
      {!blogLoad && <main className={`${inter.className}`}>
        <div className="container blogs-section">
          {blogs && blogs.map((item) => {
            return <Blog key={item.id} blogData={item.attributes} setBlogLoad={setBlogLoad} id={item.id} />
          })}
        </div>
      </main>}
      {blogLoad && <BlogContent setBlogLoad={setBlogLoad} blogs={blogs} />}
    </>
  )
}
