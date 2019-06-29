import React from 'react'
import PageContent from './../components/PageContent'
import BlogContent from './shared/BlogContent'
import BlogNav from './shared/BlogNav'


const BlogPost = ({ location: { state: { post } }}) => {
    return (
        <PageContent>
            <BlogNav to="/blog" dateCreated={post.dateCreated} navText="Back to posts"/>
            <BlogContent { ...post } />
        </PageContent>
    )
}

export default BlogPost