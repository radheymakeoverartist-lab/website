import React, { Fragment } from 'react';
import styled from 'styled-components';
//import pricing1 from 'assets/home.jpg';
//import pricing2 from 'assets/milestone3.jpg'
import Title from './Title';
import play from 'assets/play.jpg'

function Pricing() {
  const plans=[
    {
      name:"Basic",
      price:"Ksh.1,500",
    },
    {
      name:"Pro",
      price:"Ksh.2,800",
    },
    {
      name:"Expert",
      price:"Ksh.7,650",
    },
  ];

  const data=[
    {
      value:"Cheeks Ksh.800",
      type:"Basic",
    },
    {
      value:"Jawline Ksh.999",
      type:"Basic",
    },
    {
      value:"Lower Lip Ksh.599",
      type:"Pro",
    },
    {
      value:"Upper Lip Ksh.499",
      type:"Expert",
    },
    {
      value:"Upper Lip Ksh.499",
      type:"Pro",
    },
    {
      value:"Under arms Ksh.1,985",
      type:"Pro",
    },
    {
      value:"Under arms Ksh.1,985",
      type:"Pro",
    },
    {
      value:"Full leg Ksh.1,999",
      type:"Basic",
    },
    {
      value:"Half Legs Ksh.2,000",
      type:"Expert  ",
    },
    {
      value:"Daily Backups Ksh.1,960",
      type:"Expert",
    },
    {
      value:"One Click Setup Ksh.2,999",
      type:"Expert",
    },
  ]; 
  return (
   <Section>
    <Title value="Pricing"/>
    <div className="pricing_title">
      <p>Find your perfect pricing plan here</p>
      <h2>Finding the best salons in your city could be time consuming</h2>
    </div>
    <div className="pricing">
      {plans.map(({name,price},index)=>{
        return(
          <div className="pricing_plan" key={index}>
            <div className="pricing_plan_name">
              <h2>{name}</h2>
              <div className="pricing_plan_name">
                <span>Ksh.</span>
                <p>{price}</p>
              </div>
            </div>
            <div className="pricing_plan_content">
              <ul className={`pricing_plan_content_features ${name}`}>
                  {data.map(({value, type},index2)=>{
                    return (
                      <Fragment key={index2}>
                       {name==='Basic'?(
                        type===name?(
                          <li>{value}</li>
                        ):(
                          <li className='line'>{value}</li>
                        )
                       ):name==='Pro'?(
                        type===name?(
                          <li>{value}</li>
                        ):(
                        null
                       )):(name==='Expert' && <li>{value}</li>)}
                       </Fragment>
                      );
                  
                })}
              </ul>
              <div className="pricing_plan_content_actions">
                <span>Order Now</span>
                <img src={play} alt="Order Now " />
              </div>
            </div>
          </div>
        )
      })}
    </div>
   </Section>
  )}
  const Section=styled.section`
  min-height:180vh;
  padding:5rem 0;
  position:relative;
  overflow:hidden;
    .pricing_title{
      margin:6rem 10rem;
      p{
          color:var(--secondary-color);
          text-transform:uppercase;
          letter-spacing:0.2rem;
        }
        h2{
          color:var(--primary-color);
          font-size:1.5rem;
        }
      }
    .pricing{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      padding:0 10rem;
      &_plan{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:2rem;
        &:nth-child(2){
          .pricing_plan_content{
            font-size:.9rem;
            background-color:smoke;
            padding:0 5rem;
            border-left:0.2rem solid var(--primary-color);
            border-right:0.2rem solid var(--primary-color);
          }
         }
      
      &_name{
        background-color:var(--primary-color); 
        width:15rem;
        height:15rem;
        border-radius:18rem;
        padding:2rem;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        color:var(--secondary-color);
        h2{
          font-size:2rem;
          line-height:1.3rem;
        }
        &_name{
          &_price{
            color:#fff;
            display:flex;
            position:relative;
            span{
              position:absolute;
              top:1rem;
              left:-0.9rem;
              font-size:1.3rem;
            }
            p{
              font-size:4rem;
              font-weight:bold;
             }
          }
        }
      }
     .pricing_plan_content{
      &_features{
        list-style-type:none;
        text-align:center;
        color:var(--primary-color);
        display:flex;
        flex-direction:column;
        gap:0.8rem;
        .line{
          text-decoration:line-through;
          margin-bottom:2rem;
        }
      }
      &_actions{
          display:flex;
          flex-direction:column;
          justify-contet:center;
          color:var(--primary-color);  
          display:flex;
          flex-direction:column;
          gap:0.5rem;
          span{
            text-transform:uppercase;
            }
            img{
              width:4rem;
              height:4rem;
              border-radius:50%;
            }
      }
     }
     
    }
    }
    @media screen and (min-width:280px) and (max-width:1080px){
      padding:1rem;
      background-color:var(--secondary-color);
      .pricing_title{
        margin:0;
        padding:0 2rem;
        text-align:center;
          h2{
          font-size:1.3rem;
        }
      }
      .background{
        display:none;
      }
      .pricing{
        grid-template-columns:1fr;
        padding:1rem;
        gap:4rem;
        &_plan{
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:2rem;
          &_name{
            height:10rem;
            width:10rem;
            h2{
              font-size:1.5rem;
            }
            &_price{
              p{
                font-size:3rem;
              }
            }
          }
          &:nth-child(2){
            .pricing_plan_content{
              padding:0;
              border:none;
            }
          }
        }
     
  
  `;
  
export default Pricing
