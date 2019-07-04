import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import assets from '../../assets/assets.js'

library.add(fab, faCheckSquare, faCoffee)


const Footer = () => (
  <footer className="footer">
    <div className="level">
      <div className="column">
        <div className="content has-text-centered">
          <a className="button" href="https://calendly.com/kyle-raney/lets-hang-out" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="coffee" style={{ margin: '0 10px 0 5px'}} /> Kyle's Calendar Link
          </a>
          <br></br>
          <a href="https://www.facebook.com/kayla.dubois.7">
            <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" style={{margin: '10px 5px', color: '#ff92a8'}} />
          </a>
          <a href="https://www.facebook.com/raney24">
            <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" style={{margin: '10px 5px'}} />
          </a>
        </div>
      </div>
      <div className="column">
        <div className="level-item">
          <img
            src={assets['logo']}
            className="is-transparent" 
            alt="Raney's Logo" />
        </div>
      </div>
      <div className="column">
        <div className="level-item">
          <form name="contact" data-netlify="true">
            <p>Want to get notified of a new post?</p>
            <div className="field">
              <div className="control has-icons-left">
                <input className="input" type="email" placeholder="name@email.com" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
