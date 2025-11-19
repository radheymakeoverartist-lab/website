import React from "react";
import styled from "styled-components";
import play from "assets/play.jpg";
import home from "assets/portfolio6.jpg";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";

const Home = () => {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Radhey Makeover Artist</h1>
          </div>
          <div className="subTitle">
            <p>
              At the Beauty, we believe in Beauty with a conscience. We have
              created a salon that offers the highest quality hair services.
            </p>
          </div>
          <img src={play} alt="play Button" />
        </div>
      </motion.div>

      <div className="info">
        <div className="grid">
          <div className="col">
            <strong>Parlour</strong>
            <p>Radhey Academy</p>
          </div>

          <div className="col">
            <strong>Email</strong>
            <p>Radheyparlour@gmail.com</p>
          </div>

          <div className="col">
            <strong>Mobile</strong>
            <p>+254113890709</p>
          </div>

          <div className="col">
            <strong>Address</strong>
            <p>456, Sigowet</p>
            <p>878456 Kenya</p>
          </div>

          <div className="col">
            <strong>Services</strong>
            <p>Sparking</p>
            <p>SPA Cream</p>
          </div>

          <div className="col">
            <strong>Working Hours</strong>
            <p>Monday to Friday</p>
            <p>08:00 am to 09:30pm</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
background: url(${home}) no-repeat;
min-height:100vh;
background-size:cover;
position-relative;
.home{
  height:100%;
  .content{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:60%;
    color:#fff;
    gap:1.2rem;
    margin-top:8rem;
    padding-left:18rem;
    .title{
      h1{
        color:smoke;
        font-size:5rem;
        line-height:5.3rem;
      }
    }
    img{
      height:4rem;
      width:4rem;
      border-radius:50%;
    }
    .subTitle{
        p{
          background-color:rgb(18,10,2);
          border-radius:  2rem 0;
          padding:1rem;
          color:pink;
          width:70%;
          margin-bottom:2rem;
        }
    }
  }
}
.info{
  position:absolute;
  border-radius:  2rem 0;
  bottom:-6rem;
  right:0;
  background-color:var(--secondary-color);
  padding:4rem;
  .grid{
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:4rem;
    color:#fff;
  }
}
@media screen and (min-width:280px) and (max-width:1080px){
  background-size:auto;
  .home{
    .content{
      padding-left:2rem;
      width:100%;
      margin-bottom:2rem;
      .title{
        h1{
          font-size:3rem;
          line-height:3rem;
        }
      }
    }
  }
  .info{
    position:initial;
    width:80%;
    .grid{
      
      grid-template-columns:1fr;
      gap:2rem;
    }
  }
}

`;
export default Home;
