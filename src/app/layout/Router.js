import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Blog from './../Blog'
import BlogPost from './../blog/BlogPost'

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   el
// );

const Router = () => (
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/blog' component={Blog}/>
      <Route exact path='/blog/:blogPost' component={BlogPost}/>
    </BrowserRouter>
)

export default Router