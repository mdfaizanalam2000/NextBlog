import BlogContent from '@/components/BlogContent'
import React from 'react'
import { useRouter } from 'next/router'

export default function readblog() {
    const router = useRouter();
    const blogID = router.query.readblog;
    return (
        <div>
            {blogID && <BlogContent blogID={blogID} />}
        </div>
    )
}
