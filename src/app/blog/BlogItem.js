import React from 'react'
import * as Markdown from 'react-markdown'
import { Link } from 'react-router-dom'
import moment from 'moment'

const BlogItem = (post) => (
    <div className="box">
        <article className="media">
            <div className="media-content">
                <div className="content">
                    <h1>{post.title}</h1>
                    <Markdown source={post.content
                        .split(" ")
                        .splice(0,150)
                        .join(" ")
                        .concat('...')} />
                </div>
                <div className="level">
                    <div className="level-left">
                        <Link className="level-item button is-small is-link is-outlined" to={{
                            pathname: `/blog/${post.path}`,
                            state: { post }
                        }}
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="level-right">
                        <p className="level-item has-text-link is-size-7">
                            {moment(post.dateCreated).calendar(null, {
                                sameDay: '[Today]',
                                lastDay: '[Yesterday]',
                                lastWeek: '[Last] dddd',
                                sameElse: 'MMM Do YYYY'
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </div>
)

export default BlogItem