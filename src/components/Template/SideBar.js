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
      <p>Hi, I&apos;m Mona. I am a <a href="http://www.nitrr.ac.in/">NIT Raipur</a>. Worked as a Software Developer at <a href="https://www.cogoport.com/">Cogoport</a>.
      I have 1.5 years of hands-on experience in HTML, CSS, JavaScript, ReactJs and NextJs.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mona Singh<Link to="/">monasingh.in.net</Link>.</p>
    </section>
  </section>
);

export default SideBar;
