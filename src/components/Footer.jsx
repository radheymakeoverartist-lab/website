import React from 'react';
import styled from 'styled-components';
import {BsFacebook, BsTwitter, BsYoutube, BsBehance} from 'react-icons/bs';

function Footer() {
  return (
   <Foot>
    <span>
    &copy; React Website by Denis Omingo
    </span>
    <div className="footer_social_icons">
      <BsFacebook/>
      <BsTwitter/>
      <BsYoutube/>
      <BsBehance/>
    </div>
   </Foot>
  )
}

const Foot=styled.footer`
background-color:var(--primary-color);
color:#fff;
display:flex;
justify-content:space-between;
align-items:center;
padding:5rem 10rem;
.footer_social_icons{
  display:flex;
  gap:2rem;
  svg{
    font-size:1.4rem;
    cursor:pointer;
    transition:0.5s ease-in-out;
    &hover{
      color:var(--secondary-color);
    }
  }
}

@media screen and (min-width:280px) and (max-width:1080px){
 padding:1rem;
 flex-direction:column;
 text-align: center;
 gap:1rem;
}
`;

export default Footer
