import React from "react";
import styled from "styled-components";
import Title from "./Title";

function Contact() {
  return (
    <Section id="contact">
      <Title value="Contact" />
      <div className="contact">
        <div className="wrapper">
          <div className="left">
            <div className="contact_title">
              <p>Stay in touch with us</p>
              <h2>Quick Contact</h2>
            </div>
            <div className="contact_data">
              <div className="contact_data_description">
                <h4>Just to say hi !!</h4>
                <p>
                  In case you have any questions use the following contact
                  details,
                </p>
                <p>
                  Business Owners who take their online presence to the next
                  level. We are in the business of Bulk SMS, Digital Marketing.
                </p>
              </div>
              <div className="adresses">
                <p>
                  <strong>Address:</strong>
                  <span>Green Castle, Ongata Rongai.</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>Radheypalor@gmail.com</span>
                </p>
                <p>
                  <strong>Website:</strong> <span>www.Radhey.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contact_data_form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="message"
              ></textarea>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;

  .contact {
    color: var(--primary-color);
    margin: 0 18rem;
    .wrapper {
      display: flex;
      flex-direction: row;
      gap: 6rem;
    }
    &_title {
      margin: 6rem 0 2rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        font-size: 2rem;
        color: var(--secondary-color);
      }
    }
    &_data {
      gap: 4rem;
      &_description {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
          margin-top: 20px;
        }
      }
      .adresses {
        p {
          transition: 0.5s ease-in-out;
          margin-top: 2rem;
          strong {
            text-transform: uppercase;
          }
        }
        p {
          span:hover {
            color: var(--secondary-color);
            font-weight: bold;
            border-bottom: 1px solid var(--secondary-color);
          }
        }
      }
      &_form {
        margin: 6rem 0 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          text-transform: uppercase;
          border: none;
          transition: 0.5s ease-in-out;
          width: 20rem;
          border-bottom: 0.1rem solid var(--secondary-color);
          color: var(--secondary-color);
          padding-bottom: 0.7rem;
        }
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: var(--secondary-color);
        }
        textarea {
          width: 100%;
          height: 30%;
          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--primary-color);
          text-transform: uppercase;
          transition: 0.4s ease-in-out;
          &:hover {
            background-color: var(--secondary-color);
            color: #fff;
          }
        }
        input {
          height: 2rem;
        }
        input:hover,
        textarea:hover {
          border-bottom: 0.2rem solid var(--primary-color);
          font-weight: bold;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .contact {
      margin: 1rem;
      padding: 0 1rem;
      .wrapper {
        flex-direction: column;
      }
      &_title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &_data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &_form {
          button {
            height: 4rem;
          }
        }
      }
    }
  }
`;

export default Contact;
