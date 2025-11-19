import React from 'react';
import styled from 'styled-components';


function Video() {
  return (
   <Section>
    <div className="background"></div>
    <div className="video">
      <iframe
      width='960'
      height='515' 
      src="https://www.youtube.com/embed/JoWKhgZk8V4" 
      title='Youtube video player'
      frameborder="0"
      allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture'
      allowFullScreen
      ></iframe>
    </div>
   </Section>
  )
}

const Section=styled.section`
background-color:#667d91aa;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
position:relative;
.video{
  z-index:18;
}

@media screen and (min-width:280px) and (max-width:1080px){
  height:100%;
  padding:6rem 2rem;
  .video{
    iframe{
      width:80vh;
      height:10rem;
    }
  }
}
`;

export default Video
