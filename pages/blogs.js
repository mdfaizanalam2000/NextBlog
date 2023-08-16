import React from 'react'
import { useEffect, useState } from 'react'
import Blog from '@/components/Blog'
import { Inter } from 'next/font/google'
import Spinner from '@/components/Spinner'

const inter = Inter({ subsets: ['latin'] })

export default function blogs() {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://strapi-backend-vhvp.onrender.com/api/blogs?sort=updatedAt:desc");
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
      <main className={`${inter.className}`}>
        <div className="container blogs-section">
          {blogs && blogs.map((item) => {
            return <Blog key={item.id} blogData={item.attributes} id={item.id} />
          })}
        </div>
      </main>
    </>
  )
}
