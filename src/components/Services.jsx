import React from 'react'
import styled from 'styled-components'
import play from 'assets/play.jpg'
import service1 from 'assets/service1.jpg' 
import service2 from 'assets/service2.jpg' 
import service3 from 'assets/service3.jpg'  
import Title from './Title'

function Services() {
  const data=[
    {
      type:"Blowout",
      text:"Shampoo and blow dry.If you are looking to celebrate your special day with us", 
      image:service1
    },

    {
      type:"Olaplex",
      text:"We make your hair look young and attractive by applying shampoo",
      image:service2
    },
    {
      type:"Makeup",
      text:"Receive faster and efficient face makeup services at an affordable price",
      image:service3
    }
  ]
  return (
   <Section id='services'>
    <Title value='Services'/>
      <div className="services">
        {data.map(({type,text,image} ,index) =>{
            return(
              <div className="services_service">
                <div className="services_service_image">
                  <img src={image} alt="Service" />
                </div>
                <div className="services_service_title">
                  <span>0{index+1}</span>
                  <h2>{type}</h2>
                </div>
                <p className="services_service_description">{text}</p>
                <img src={play} alt="Roadmap" />
              </div>
            )
          })
        }
      </div>
   </Section>
      )
}

const Section=styled.section`
min-height:100vh;
.services{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  align-items:center;
  height:100%;
  margin:0 14rem;
  margin-top:10rem;
  gap:4rem;
  &_service{
    padding:2rem;
    img{
      height:4rem;
      width:4rem;
      border-radius:50%;
    }
    &:nth-of-type(2){
      background-color:var(--primary-color);
      border-radius:2rem 0;
      .services_service_title{
        span{
          color:#fff;
        }
      }
    .services_service_description{
      color:#fff;
    }
    }
    &_image{
      img{
        height:17rem;
        width:17rem;
        margin-bottom:3rem;
        border-radius:2rem 0;
      }
      }
    &_title{
        span{
          color:var(--primary-color);
          font-weight:bolder; 
        }
        h2{
          font-size:3rem;
          line-height:2.5rem;
          margin-bottom:5rem;
          color:var(--secondary-color);
        }
      }
      &_description{
        color:var(--primary-color);
        margin-bottom:2rem;
      }
  }
}
@media screen and (min-width:280px) and (max-width:1080px){
  .services{
    margin:2rem 0;
    grid-template-columns:1fr;
    gap:2rem;
    padding:0 2rem; 
  }
}
`
;

export default Services
