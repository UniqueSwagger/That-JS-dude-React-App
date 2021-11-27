/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark py-0">
        <section className="container-fluid bg-dark p-2 ">
          <a className="navbar-brand ms-5" href="#">
            That Js dude
          </a>
          <button className="btn btn-primary me-4">
            <a
              className="text-decoration-none text-white"
              target="_blank"
              href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=638348368613.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Fwww.thatjsdude.com%2F&response_type=token&flowName=GeneralOAuthFlow"
            >
              Sign in
            </a>
          </button>
        </section>
      </nav>
      <section className="p-5 " style={{ backgroundColor: "#eee" }}>
        <div className="d-flex flex-column gap-2">
          <h1 className="display-4 fw-normal">
            Exclusive React Workshop for <br /> beginners!
          </h1>
          <h4 class="text-muted">
            Once in a year opportunity to learn and build you{" "}
            <a href="https://ema-john.firebaseapp.com/" target="_blank">
              first React app
            </a>
          </h4>
        </div>
        <button className="btn btn-lg btn-primary me-4 mt-2">
          <a
            className="text-white text-decoration-none"
            target="_blank"
            href="http://thatjsdude.com/workshops/react/"
          >
            Learn more
          </a>
        </button>
      </section>
    </header>
  );
};

export default Header;
