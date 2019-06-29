import React from 'react'
import BlogContent from './shared/BlogContent'
import BlogNav from './shared/BlogNav'

const BlogItem = (post) => (
    <div className="box">
        <BlogContent limit={150} {...post }>
            <BlogNav to={{
                pathname: `/blog/${post.path}`,
                state: { post }
            }} navText="Read More"
            dateCreated={post.dateCreated} />
        </BlogContent>
    </div>
)

export default BlogItem