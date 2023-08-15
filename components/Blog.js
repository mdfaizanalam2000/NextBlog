import React from 'react'

export default function Blog(props) {
    const { title, description, blogImg, updatedAt } = props.blogData;
    return (
        <div className="card my-3">
            <img src={blogImg} className="card-img-top flex-column" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary" onClick={() => {
                    localStorage.setItem("id", props.id)
                    props.setBlogLoad(true)
                }}>Read Blog</button>
                <p className='text-muted'>Last Updated on: {new Date(updatedAt).toLocaleDateString()} at: {new Date(updatedAt).toLocaleTimeString()}</p>
            </div>
        </div>
    )
}
