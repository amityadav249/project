import React from 'react'
import { Link } from 'react-router-dom'
import image from './logo2 (2).png'

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src={image}
              height={50}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/BrowseProduct">
                  Browse Product
                </a>
              </li>
              <li className="nav-item">
              <Link to="/productlisting" className="btn btn-link nav-link px-3 me-2">
                Products
              </Link>
              </li>
              <Link to="/About" className="btn btn-link nav-link px-3 me-2">
                About
              </Link>
              {/* <li className="nav-item">
            <a className="nav-link" to="/ViewProduct">
              View Product
            </a>
          </li> */}
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
              <Link to="/login" className="btn btn-link nav-link px-3 me-2">
                Login
              </Link>
              <a href="/signup" className="btn btn-primary me-3">
                Sign up for free
              </a>

            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>

  )
}

export default Navbar