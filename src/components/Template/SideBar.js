import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/mona.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Mona Singh</h2>
        <p><a href="mailto:singhmona1456@gmail.com">singhmona1456@gmail.com</a></p>
      </header>
    </section>
    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mona, a dedicated software developer with 1.5 years of valuable industry experience. 
      My focus and expertise lie in the dynamic realm of frontend development, where I have honed my skills in crafting user-friendly and visually compelling interfaces.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mona Singh 2023 - <Link to="https://monasingh.in.net/">monasingh.in.net</Link>.</p>
    </section>
  </section>
);

export default SideBar;
