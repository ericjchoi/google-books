import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info fixed-top">
      <a className="navbar-brand" href="/" style={{ fontSize: "2rem" }}>Google Books Search</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/" style={{ fontSize: "1.5rem" }}>Search</a>
          <a className="nav-item nav-link" href="/saved" style={{ fontSize: "1.5rem" }}>Saved</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
