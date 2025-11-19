import React from 'react';
import styled from 'styled-components';
import Title from './Title';

function Skills() {
  const skillsData=[
    {
      name:"Facial",
      amount:75,
    },
    {
      name:"Skin",
      amount:50,
    },
    {
      name:"SPA",
      amount:90,
    },
    {
      name:"Cosmetic",
      amount:70,
    },
    {
      name:"Salon",
      amount:90,
    },

  ];
  return (
   <Section id="skills">
      <div className="sideTitle">
      <Title value="skills"/>
      </div>
      <div className="skills_title">
        <p>Our Skills</p>
        <h2>Check Our Super Awesome Skills</h2>
      </div>
      <div className="skills">
        <div className="skills_bars">
          {
            skillsData.map(({name, amount})=>{
              return(
                <div className="skills_bars_bar" key={name}>
                  <div className="container">
                    <progress value={amount} max='100'/>
                    <span>{name}</span>
                  </div>
                  <h4>{amount}%</h4>
                </div>
              )
            })
          }
        </div>
        <div className="skills_content">
          <p className="title">
          Beauty Services and Products
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vel eveniet accusantium quidem est dolorum quibusdam tempore dicta? Voluptate, cupiditate?
          </p>
        </div>
      </div>
   </Section>
  )
}
const Section=styled.section`
min-height:180vh;
height:140vh;
background-color:var(--secondary-color);

.sideTitle{
  h1{
    color:#fff;
    z-index:2;
  }
}
.skills_title{
  padding:6rem 10rem;
  p{
    text-transform:uppercase;
    letter-spacing:0.2rem;
    color:var(--primary-color);
  }
  h2{
    color:#fff;
    font-size:2rem;
  }
}
.skills{
  display:flex;
  padding:0 5rem 0 20rem;
  gap:10rem;
  &_bars{
    transform:rotate(-90deg);
    width:max-content;
    height:max-content;
    display:flex;
    flex-direction:column;
    gap:4rem;
    &_bar{
      display:flex;
      flex-direction:row-reverse;
      gap:1rem;
      .container{
        display:flex;
        flex-direction:column;
        gap:2.5rem;
        span{
          text-transform:uppercase;
          letter-spacing:0.2rem;
          color:var(--primary-color);
        }
        progress{
          width:30rem;
          webkit-appearance:none;
          appearance:none; 
         
          &::-webkit-progress-bar{
            height:3rem;
            border-radius:20px;
            color:red;
          }
        }
      }
      h4{
        transform:rotate(90deg);
        color:#fff;
        font-size:2rem;
      }
    }
  }
  &_content{
    display:flex;
    flex-direction:column;
    gap:2rem;
    color:white;
    z-index:2;
  }
}

@media screen and (min-width:280px) and (max-width:1080px){
  overflow-x:hidden;
  padding:2rem 0;
  .background{
    display:none;
  }
  .skills_title{
    padding:2rem;
    text-align:center;
    h2{
      font-size:1.5rem;
    }
  }
  .skills{
    padding:0;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:1rem;
    &_bar{
      padding:0.2rem;
      gap:0;
      align-items:center;
      justify-content:center;
      &_bar{
        .container{
          gap:1rem;
          .progress{
            width:12rem;
            height:0.5rem;
            &::-webkit-progress-bar{
              height:0.3rem;
            }
          }
        }
        h3{
          font-size:1rem;
        }
      } 
      &_content{
        padding: 0 2rem;
      }
    }
  }
}

`;

export default Skills
