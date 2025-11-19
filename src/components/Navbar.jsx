import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <Nav state={isNavOpen ? 1 : 0}>
      <div className="brand-container">
        <a href="#" className="brand">
          <h1>Radhey SPA</h1>
        </a>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <div className={` links ${isNavOpen ? "show" : " "}`}>
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#blog">Blog</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
display:flex;
justify-content:space-between;
margin: 0 2rem;
color:#fff;

.brand-container{
  margin:0 2rem;
a{
  text-decoration:none;
  color:#fff;
}
.toggle{
  display:none;
}
}
.links{
  ul{
    list-style-type:none;
    display:flex;
    gap:2rem;
    .active{
      a{
        border-bottom:0.2rem solid var(--secondary-color);
      }
    }
  li{
    a{
      color:var(--secondary-color);
      text-decoration:none;
      font-weight:400;
      font-size:1rem;
      text-transform:uppercase;
    }
    a:hover{
      color:var(--secondary-color);
      background-color:#fff;
      border-radius:9px;
    }
  }
  }
}
@media screen and (min-width:280px) and (max-width:1080px){
  margin:0;
  position:relative;
  .brand-container{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    .toggle{
      position :relative;
      padding:1px;
      display:block;
      left:20px;
      top:0;
      z-index:1;
      transition:0.5;
    }
  }
  .show{
    opacity:1 !important;
    visibility:visible !important;
  }
  .links{
    position:absolute;
    overflow-x:hidden;
    top:10px;
    right:10px;
    width:${({ state }) => (state ? "60%" : "0%")}
    min-height:100vh;
    background-color:var(--secondary-color);
    opacity:0;
    visibility:hidden;
    ul{
      flex-direction:column;
      text-align:center;
      height:100%;
      justify-content:center;
      color:#fff;
      li{
        padding:.2rem;
        a{
          color:#fff;
          padding:0 1rem;
        }
        a:hover{
          background-color:var(--secondary-color);
          color:white;
          border-bottom:2px solid black;
          
        }
      }
    }
  }
}
`;

export default Navbar;
