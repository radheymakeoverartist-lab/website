import React from 'react';
import styled from 'styled-components';
import play from 'assets/play.jpg';
import home from 'assets/portfolio10.jpg'; 
import Title from './Title';

function Blog() {
  const blogData=[
    {
      title:'PARLOUR JOURNAL',
      type:'SPA',
      description:"The Major intention of our blog is to help you find answers related to healthy skin and hair.....Will write more",
    },
    {
      title:'REFELXOLOGY SKY',
      type:'Relax',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias illum, minus hic, voluptatem dolores similique aliquam, accusantium sint dolorem voluptate quaerat. Maiores unde vel optio dolorum molestias recusandae dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa.",
    },
    {
      title:'MEDITATION SUN',
      type:'Yoga',
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quam!" ,
    },
  ]
  return (
   <Section id='blog'>
    <Title value='Blog'/>
    <div className="blogs">
      {blogData.map(({title,type,description})=>{
        return(
          <div className="blog">
            <div className="image"></div>
            <div className="title">
              <h3>{title}</h3>
            </div>
            <span className="type">{type}</span>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="more">
              <img src={play} alt="Play" />
              <span>Read More</span>
            </div>
          </div>
        )
      }

      )
      }
    </div>
   </Section>
  )
}

const Section=styled.section`
  min-height:100vh;
  position:relative;
  .blogs{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:3rem;
    margin:5rem 15rem;
    .blog{
      display:flex;
      flex-direction:column;
      gap:1rem;
      .image{
        height:15rem;
        background:url(${home}) no-repeat center;
        background-size:cover;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .title{
        h3{
          color:var(--secondary-color);
          font-size:1.5rem;
        }
      }
      .type{
        color:var(--primary-color);
        font-weight:bolder;
        text-transform:uppercase;
      }
      .description{
        height:18rem;
        color:var(--primary-color);
      }
      .more{
        display:flex;
        align-items:center;
        gap:1rem;
        cursor:pointer;
        img{
          height:4rem;
          width:4rem;
          border-radius:50%;
          opacity:0.8;
        }
        img:hover{
          opacity:0.999;
        }
        span:hover{
          color:var(--secondary-color);
          font-weight:bolder;
        }
      }
    }
  }
  @media screen and (min-width:280px) and (max-width:1080px){
    margin:2rem 0;
    .blogs{
      padding:0 2rem;
      grid-template-columns:1fr;
      margin:0 1rem;
    }
  }
`;

export default Blog
