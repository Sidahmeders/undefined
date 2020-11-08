import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.scss';


 export function NavBar() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []); 

  useEffect(() => {
    let nav = document.getElementById('navbar');
    if(offset > 50) {
      nav.classList.add('show');
    } else {
      nav.classList.remove('show');
    }
  });

  return (
    <div id="navbar" className="nav-bar">

      <section className="logo">
          <Link className="link" to="/">javaScript</Link>
      </section>

      <nav className="nav-links"> 
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/">tutorials</Link></li>
          <li><Link to="/">articles</Link></li>
          <li><Link to="/">algorithms</Link></li>
          <li><Link to="/">books</Link></li>
          <li><Link to="/">forum</Link></li>
        </ul>
      </nav>

      <section className="search-bar">
        <div className="container">
          <input type="text" placeholder="Search..." />
          <div className="search"></div>
        </div>
      </section>

      <section className="social-media">
        <ul>
          <li>
            <a href="https://www.freecodecamp.org/" target="blank">
              <i className="fab fa-free-code-camp"></i>
            </a>
          </li>
          <li>
            <a href="https://ubuntu.com/" target="blank">
              <i className="fab fa-ubuntu"></i>
            </a>
          </li>
        </ul>
      </section>
      
    </div>
  );
};

export default NavBar;
