import React from 'react'
import BlogItem from './blog/BlogItem'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent';
import * as contentful from 'contentful'

class Blog extends React.Component {
    state = {
        posts: []
    }
    
    client = contentful.createClient({
        space: '6ab7ty8oklme',
        accessToken: '13eca3eaffc7380a0c0bf0e09c4772a18f7b27adec17baff84f17eda98618762'
    })

    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }

    fetchPosts = () => this.client.getEntries()

    setPosts = response => {
        this.setState({
            posts: response.items
        })
    }

    render() {
        
        return (
            <div>
                <PageHeader color="is-info" title="Zoom Out Blog Posts">
                    A blog sharing the experiences I have that have taught me to "Zoom Out" when it comes to life.
                </PageHeader>
                <br/>
                <PageContent>
                { this.state.posts.map(({fields}, i) =>
                    <BlogItem key={i} {...fields} />
                )}
                </PageContent>
            </div>
        )
    }
}

export default Blog