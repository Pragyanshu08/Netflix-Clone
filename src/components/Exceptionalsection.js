import React from 'react'
import styled from 'styled-components'

const Exceptionalsection = ({heading , para , imageNo , videoNo}) => {
  return (
    <Section>
     <div className="text">
        <h1>{heading}</h1>
        <p>{para}</p>
     </div>
     <div className="image">
        <img src={`/images/image${imageNo}.png`} alt="" />
        <video autoPlay muted loop  src={`/videos/video${videoNo}.m4v`}></video>
     </div>
 </Section>
  )
}

export default Exceptionalsection

const Section = styled.div`

   background-color: black;
   height: 80vh;
   display: flex;
   flex-direction: row;
   gap: 30px;
   max-width: 100%;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   margin-top: 8px;

   .text{
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: white;
    font-size: 20px;
    
    p{
        max-width: 550px;
    }

   }

    .image{
        position: relative;
        top: 0;
        display: flex ;
        justify-content: center;
        align-items: center;

        img{
        
           position: absolute;
           z-index: 10;
        }

        video{
            position: relative;
            width: 80%;
            height: 70%;
            bottom: 100px;
        }
    }

    
   
`