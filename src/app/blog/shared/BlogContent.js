import React from 'react'
import * as Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

const BlogContent = (post) => (
    <article className="media">
        <div className="media-content">
            <div className="content">
                <h1>
                    <Link to={{
                        pathname: `/blog/${post.path}`,
                        state: { post }
                    }}>
                        { post.title }
                    </Link>
                </h1>
                <Markdown
                source={
                    post.limit
                    ? post.content.split(" ").splice(0, post.limit).join(" ").concat('...')
                    : post.content
                }
                />
            </div>
        { post.children }
        </div>
    </article>
)

export default BlogContent