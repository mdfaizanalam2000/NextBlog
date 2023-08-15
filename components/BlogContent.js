import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export default function BlogContent(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const blogContent = props.blogs.filter((item) => {
        return item.id == localStorage.getItem("id")
    })
    return (
        <>
            <div className="my-3 text-center">
                <button onClick={() => props.setBlogLoad(false)} className='btn btn-warning'>Go back<i className="fa-solid fa-arrow-left"></i></button>
            </div>
            <ReactMarkdown className='blog-content'>{blogContent[0].attributes.content}</ReactMarkdown>
        </>
    )
}
