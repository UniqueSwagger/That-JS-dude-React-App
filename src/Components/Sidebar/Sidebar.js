/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="p-5 col-lg-3 my-5 sidebar"
      style={{ backgroundColor: "#f5f5f5", border: "1px solid #e3e3e3" }}
    >
      <h3>Personal Training for $30</h3>
      <p>
        If you need career guide, personal interview tips, mock interview, Life
        Coaching, or anything else, you can book me for 30 min. Just pay $30 via
        paypal to Codinism (my company) and then book a time slot You can Book
        me
      </p>
      <h4 className="mt-3">Recent Videos</h4>
      <ul>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="https://www.youtube.com/watch?v=2zmUSoVMyRU"
            rel="noreferrer"
          >
            15+ tricks for dev tool
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="https://www.youtube.com/watch?v=yuo8YqKDQ-M&feature=youtu.be"
            rel="noreferrer"
          >
            Understanding this
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="https://www.youtube.com/watch?v=Rx_JFOSxgpY"
            rel="noreferrer"
          >
            be expert in JS Array
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="https://www.youtube.com/watch?v=7fXhE5ErUCM"
            rel="noreferrer"
          >
            How Browsers works in 4 min
          </a>
        </li>
      </ul>
      <button className="btn btn-light border">
        <a
          target="_blank"
          className="text-decoration-none text-black"
          href="https://www.youtube.com/user/khanLearning"
          rel="noreferrer"
        >
          More on youtube
        </a>
      </button>
      <h4 className="mt-3">Recent Talks</h4>
      <ul>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="https://that.us/events/tx/2022"
            rel="noreferrer"
          >
            Functional Programming: What, Why and How
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="https://that.us/events/tx/2022"
            rel="noreferrer"
          >
            JavaScript Code Quality
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="http://thatjsdude.com/"
            rel="noreferrer"
          >
            Angular JS for Absolute Beginners
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="http://thatjsdude.com/"
            rel="noreferrer"
          >
            Getting started with React JS
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="http://thatjsdude.com/"
            rel="noreferrer"
          >
            High Perf JS
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="http://thatjsdude.com/"
            rel="noreferrer"
          >
            Are you sure, you know JavaScripts
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="http://thatjsdude.com/"
            rel="noreferrer"
          >
            High Performance JS and CSS
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="http://thatjsdude.com/"
            rel="noreferrer"
          >
            What's New in ES6
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none"
            href="http://thatjsdude.com/"
            rel="noreferrer"
          >
            Make Web Faster
          </a>
        </li>
      </ul>
      <button className="btn btn-light border">
        <a
          target="_blank"
          className="text-decoration-none"
          className="text-decoration-none text-black"
          href="http://thatjsdude.com/talk/index.html"
          rel="noreferrer"
        >
          Speaker profile
        </a>
      </button>
      <h4 className="mt-3">Invite to a talk</h4>
      <p>
        if you want to invite that js dude in any of your meetup, conference or
        hangout, send email to{" "}
        <a
          className="text-decoration-none"
          href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
        >
          s.rahmanrahi15@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Sidebar;
