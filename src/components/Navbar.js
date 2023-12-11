import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  fixed-top bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname == "/" ? "activate" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname == "/about" ? "activate" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          {!localStorage.getItem("token") ? (
            <div>
              <Link to="/login">
                <button type="button" className="btn btn-primary mx-2">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn btn-primary">
                  Sign up
                </button>
              </Link>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
