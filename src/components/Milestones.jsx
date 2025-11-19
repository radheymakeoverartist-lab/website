import React from 'react';
import milestone1 from 'assets/milestone.jpg';
import milestone2 from 'assets/milestone4.png';
import milestone3 from 'assets/milestone3.jpg';
import styled from 'styled-components';
import Title from './Title';


function Milestones() {
    const milestone=[
      {
        image:milestone1,
        data:"Client Served",
        amount:"877",
      },
      {
        image: milestone2,
        data:"of raw data",
        amount:"1.4M",
      },
      {
        image: milestone3,
        data:"Reviews",
        amount:"5.4K",
      },
    ]
  return (
    <Section>
      <div className="milestones">
      {
          milestone.map(({image,data,amount})=>{
            return (
              <div className="milestone">
                <p>{amount}</p>
                <span>{data}</span>
                <img src={image} alt="Milestone" />
              </div>
            ) 
          })
      }
      </div>
     

    </Section>
  )
}

const Section=styled.section`
height:100vh;
background-color:#fff;
padding:0 18rem;
position:relative;

.milestones{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  color:var(--secondary-color);
  align-items:center;
  height:100%;
  .milestone{
    z-index:20;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:2rem;
    p{
      font-size:5rem;
      font-weight:bolder;
      line-height:3rem;
    }
    span{
      text-transform:uppercase;
      color:black;
    }
    img{
      height:6rem;
    }
  }
}
@media screen and (min-width:280px) and (max-width:1080px){
  padding:5rem 2rem;
  min-height:100ch;
  height:100%;
  .background{
    display:none;
  }
  .milestones{
    grid-template-columns:1fr;
    gap:5rem;
  }
}
`;

export default Milestones
