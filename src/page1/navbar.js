import React from "react";
import "./styles/navbar.css";
import "https://kit.fontawesome.com/490c8b9b10.js";
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <label className="bar-icon">
        <i className="fa-solid fa-bars"></i>
      </label>
      <div>
        <a className="active" href="#home">
          <img onClick={() => navigate('/')}
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            width="91"
            height="34"
            alt="Udemy"
          />
        </a>
      </div>

      <div>
        <a className="Categories_mobile" >Categories</a>
      </div>
      <div className="search-container mobile">
        <form action="/action_page.php" className="mobile">
          <div className="for-search-icon">
            <button id="searchIcon" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div>
            <input
              id="search-input"
              type="text"
              placeholder="Search for anything"
              name="search"
            />
          </div>
        </form>
      </div>
      <div>
        <a className="link_Udemy mobile" href="#">
          Udemy business
        </a>
      </div>
      <div>
        <a className="link_Udemy mobile" href="#" >
          Teach on Udemy
        </a>

      </div>
      <div className="mobile">
        <a className="shop" href="#"></a>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
      <div>
        <button className="log_in mobile">Log in</button>
      </div>
      <div className="buton_up mobile">
        <div className="logout mobile">
          <button className="out mobile"> Sign up </button>
        </div>
      </div>
      <div className="earth mobile">
        <i className="fa-solid fa-earth-americas" aria-hidden="true"></i>
      </div>
    </div>
  );
}
