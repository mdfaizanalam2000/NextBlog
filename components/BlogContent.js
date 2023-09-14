import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router';
import Spinner from './Spinner';


export default function BlogContent(props) {
    const router = useRouter();
    const [blogContent, setBlogContent] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const response = await fetch(`https://strapi-backend-vhvp.onrender.com/api/blogs?filters[id][$eq]=${props.blogID}`);
            const parsedData = await response.json();
            setBlogContent(parsedData.data);
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <>
            {loading ? <Spinner /> :
                (blogContent && blogContent.length > 0) ?
                    <>
                        <div className="my-3 text-center">
                            <button onClick={() => router.push('/blogs')} className='btn btn-warning'>Go back<i className="fa-solid fa-arrow-left"></i></button>
                        </div>
                        <h2 className='text-center'>{blogContent[0].attributes.title}</h2>
                        <ReactMarkdown className='blog-content'>
                            {blogContent[0].attributes.content}
                        </ReactMarkdown>
                    </>
                    : <>
                        <div className="my-3 text-center">
                            <button onClick={() => router.push('/blogs')} className='btn btn-warning'>Explore Blogs<i className="fa-solid fa-arrow-left"></i></button>
                        </div>
                        <h4 className='text-center'>Oops! The blog you are looking for either doesn't exist or might have been deleted.</h4>
                    </>
            }
        </>
    )
}
