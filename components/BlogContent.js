import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router';


export default function BlogContent() {
    const router = useRouter();
    const [blogContent, setBlogContent] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://strapi-backend-vhvp.onrender.com/api/blogs?filters[id][$eq]=${localStorage.getItem("id")}`);
            const parsedData = await response.json();
            setBlogContent(parsedData.data);
        }
        fetchData();
    }, [])

    return (
        <>
            {blogContent &&
                <>
                    <div className="my-3 text-center">
                        <button onClick={() => router.push('/blogs')} className='btn btn-warning'>Go back<i className="fa-solid fa-arrow-left"></i></button>
                    </div>
                    <h2 className='text-center'>{blogContent[0].attributes.title}</h2>
                    <ReactMarkdown className='blog-content'>
                        {blogContent[0].attributes.content}
                    </ReactMarkdown>
                </>}
        </>
    )
}
