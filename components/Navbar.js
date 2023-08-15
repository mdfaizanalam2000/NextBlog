import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">NextBlog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={router.pathname == "/" ? "nav-link active" : "nav-link"} aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={router.pathname == "/about" ? "nav-link active" : "nav-link"} href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={router.pathname == "/blogs" ? "nav-link active" : "nav-link"} href="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
