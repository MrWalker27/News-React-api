import { NavLink } from "react-router-dom";
import "../Nav.css";
import Hamburger from 'hamburger-react';
import { useState } from "react";

function Nav() {
  const [state, setState] = useState(false);
  const [moreState, setMoreState] = useState(false);
    return (
        <>
            <nav>
      <ul>
        <li className="item"><NavLink to="/News-React-api">Home</NavLink></li>
        <li className="item"><NavLink to="#">News</NavLink></li>
        <li className="item"><NavLink to="#">Articles</NavLink></li>
        <li className="item"><NavLink to="#">Media</NavLink></li>
        <li className="item"><NavLink to="#">Events</NavLink></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle,item">More</a>
          <ul className="dropdown-menu">
            <li className="itemd"><NavLink to="/about">Subscribe</NavLink></li>
            <li className="itemd"><NavLink to="/contact">Creative Showcase</NavLink></li>
              <li className="itemd"><NavLink to="/faq">Careers</NavLink></li>
              <li className="itemd"><NavLink to="/faq">Contact Us</NavLink></li>
          </ul>
        </li>
          <li className="search" style={{marginLeft: '30px'}}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><path fill="#FFF" d="M17.894 16.738a.38.38 0 0 1 .106.282.514.514 0 0 1-.106.316l-.808.773a.437.437 0 0 1-.317.141.334.334 0 0 1-.28-.14l-4.29-4.255a.468.468 0 0 1-.105-.28v-.493A7.552 7.552 0 0 1 9.879 14.4a7.07 7.07 0 0 1-2.567.475c-1.335 0-2.56-.328-3.673-.984a7.388 7.388 0 0 1-2.655-2.655C.328 10.123 0 8.898 0 7.563c0-1.336.328-2.561.984-3.674A7.388 7.388 0 0 1 3.64 1.234C4.752.578 5.977.25 7.312.25c1.336 0 2.561.328 3.674.984a7.388 7.388 0 0 1 2.655 2.655c.656 1.113.984 2.338.984 3.674a7.07 7.07 0 0 1-.475 2.566 7.552 7.552 0 0 1-1.318 2.215h.492a.38.38 0 0 1 .281.105l4.29 4.29zm-10.582-3.55a5.502 5.502 0 0 0 2.813-.756 5.585 5.585 0 0 0 2.057-2.057 5.502 5.502 0 0 0 .755-2.812 5.502 5.502 0 0 0-.755-2.813 5.585 5.585 0 0 0-2.057-2.057 5.502 5.502 0 0 0-2.813-.755 5.502 5.502 0 0 0-2.812.755A5.585 5.585 0 0 0 2.443 4.75a5.502 5.502 0 0 0-.756 2.813c0 1.007.252 1.945.756 2.812A5.585 5.585 0 0 0 4.5 12.432a5.502 5.502 0 0 0 2.812.756z"></path></svg></li>
          </ul>
          <a href="#" onClick={() => setState(!state)}><span className="hamburger"><Hamburger color="#ffffff"></Hamburger></span></a>
          
        </nav>
        <nav className= {state ? "navMobileShow" : "navMobileHide"}>
        <li className="itemMobile"><NavLink to="/News-React-api">Home</NavLink></li>
        <li className="itemMobile"><NavLink to="#">News</NavLink></li>
        <li className="itemMobile"><NavLink to="#">Articles</NavLink></li>
        <li className="itemMobile"><NavLink to="#">Media</NavLink></li>
          <li className="itemMobile"><NavLink to="#">Events</NavLink></li>
          <a href="#" onClick={() => setMoreState(!moreState)}><span className="itemMobile">More</span></a>
          <ul className={moreState ? "mobileMoreShow" : "mobileMoreHide"}>
            <li className="itemMd" style={{marginTop:'10px'}}><NavLink to="/about">Subscribe</NavLink></li>
            <li className="itemMd"><NavLink to="/contact">Creative Showcase</NavLink></li>
              <li className="itemMd"><NavLink to="/faq">Careers</NavLink></li>
              <li className="itemMd"><NavLink to="/faq">Contact Us</NavLink></li>
          </ul>
        </nav>
        </>
    )
}
export default Nav;