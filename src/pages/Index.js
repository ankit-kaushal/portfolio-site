import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Mona Singh's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">FACTS ABOUT ME</Link></h2>
          <p>
            Code Whisperer, Debugging Detective, Commitment to Commitment,
            Coffee Friend, Ninja in the Kitchen
          </p>
        </div>
      </header>
      <p> Currently, I am actively seeking new opportunities to further expand my horizons
        and contribute my skills to a team that values creativity and excellence in frontend development.
        I am excited about the prospect of joining a forward-thinking company where I can continue to grow 
        as a professional and make meaningful contributions to impactful projects. Please feel free to read more
        <Link to="/about"> about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link> {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
