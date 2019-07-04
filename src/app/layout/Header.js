import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar"
          aria-label="main navigation"
          style={{
            borderBottom: 'solid 1px #dddddd',
        }}>
          <div className="navbar-brand">
            <NavLink
              className="navbar-item"
              to="/"
              activeClassName="is-active"
            >
              Zoom Out
            </NavLink>
            <a href="/" className="navbar-item">
              
            </a>
            <button className="button navbar-burger" onClick={this.toggleNav}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start is-right">
              <NavLink
                className="navbar-item"
                to="/blog"
                activeClassName="is-active"
              >
                Posts
              </NavLink>
              {/* <a href="/about" className="navbar-item">
                About Us
              </a>
              <a href="/contact" className="navbar-item" >
                  Contact
              </a> */}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header