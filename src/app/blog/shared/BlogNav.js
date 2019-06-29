import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const BlogNav = ({ to, dateCreated, navText }) => (
    <nav className="level">
        <div className="level-left">
            <Link className="level-item button is-small is-link is-outlined" to={to}>{navText}</Link>
        </div>
        <div className="level-right">
            <p className="level-item has-text-link is-size-7">
                {moment(dateCreated).calendar(null, {
                sameDay: '[Today]',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'MMM Do YYYY'
                })}
                
            </p>
        </div>
    </nav>
)

export default BlogNav