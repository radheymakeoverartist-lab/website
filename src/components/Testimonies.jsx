import React, { useState } from "react";
import loadmore from "assets/loadmore2.png";
import styled from "styled-components";

function Testimonies() {
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "SPA",
      name: "Mary James",
      review:
        "Radhey is the best parlor in Nairobi. I enjoyed your services alot. Keep up the great job guys!! .",
    },
    {
      designation: "Full Makeup",
      name: "Janet Ambros",
      review:
        "Your services are beyond imagination. Thank you for your quality services",
    },
    {
      designation: "Skin",
      name: "Natalia Kwamboka",
      review:
        "I absolutely have nothing against your services. I will keep coming and coming again...",
    },
  ];
  return (
    <Section>
      <div className="container">
        <div className="testimonials">
          {testimonials.map(({ designation, name, review }, index) => {
            return (
              <div
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="image">
                  <div className="circle2">
                    <img src={loadmore} alt="Loadmore" />
                  </div>
                </div>
                <div className="title-container">
                  <span className="designation">{designation}</span>
                  <h3 className="title">{name}</h3>
                </div>
                <p className="description">{review}</p>
              </div>
            );
          })}
        </div>
        <div className="controls">
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => {
              setSelected(0);
            }}
          >
            1
          </button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => {
              setSelected(1);
            }}
          >
            2
          </button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => {
              setSelected(2);
            }}
          >
            3
          </button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 7rem;
  justify-content: center;
  align-items: center;
  .testimonials {
    display: flex;
    gap: 1rem;
    text-align: center;
    justify-content: center;
    margin-bottom: 2rem;
    .testimonial {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      gap: 1rem;
      .image {
        position: relative;
        .circle2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 4rem;
          width: 10rem;
          border-radius: 10rem;
          background-color: #bb50e6b0;
          img {
            height: 3rem;
            width: 3rem;
            border: 10px groove;
            border-radius: 50%;
          }
        }
      }
    }
    .hidden {
      display: none;
    }
    color: #fff;
    .designation {
      height: 8rem;
    }
  }
  .controls {
    display: flex;
    gap: 1rem;
    justify-content: center;
    button {
      width: 2rem;
      height: 2rem;
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: var(--secondary-color);
      border: 0.1rem solid transparent;
      cursor: pointer;
    }
    .active {
      background-color: transparent;
      border: 0.1rem solid var(--secondary-color);
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .container {
      padding: 4rem 0;
      .testimonials {
        justify-content: center;
        align-items: center;
        width: 100%;
        .testimonial {
          .description {
            height: 18rem;
          }
        }
        .controls {
          align-items: center;
          justify-content: center;
          button {
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;

export default Testimonies;
