import React from "react";
import Logo from "../../images/WEB-LOGO.png";
import "./Nav.css"

const Nav = () => {
    const buttonStyle = {
        backgroundColor: '#78C04F',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer'
      };
    
      const buttonHoverStyle = {
        backgroundColor: 'darkgreen' 
      };
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
        <img src={Logo} alt="Logo" style={{ width: '120px', height: 'auto' }} />

        </div>
        <div className="menu-Link">
        <ul >
           <li>
            <a href="#">Home</a>
           </li>
           <li>
            <a href="#">Corporate</a>
           </li>
           <li>
            <a href="#">Services</a>
           </li>
           <li>
            <a href="#">Technologies</a>
           </li>
           <li>
            <a href="#">Contact us</a>
           </li>
           <li>
            <a href="#">Blog</a>
           </li>
           <li>
            <a href="#">Career</a>
           </li>
        </ul>

        </div>
        <div className="social">
        <button 
      className="get-quote-button" 
      style={buttonStyle}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
    >
      Get a Quote
    </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
