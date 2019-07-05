import React from 'react'

const PageHero = (props) => (
  <section className="hero is-link is-fullheight-with-navbar is-danger has-background">
    <img src={ props.imagePath } className="hero-background is-transparent" alt="Wedding Pciture"/>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          { props.title }
        </h1>
        <h2 className="subtitle">
          { props.subtitle }
        </h2>
      </div>
    </div>
  </section>
)

export default PageHero