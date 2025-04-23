import React from 'react'
import styled from 'styled-components'

const Sections = ({heading, para , imageNo , videoNo , value , imgType , ddon}) => {
  return (
     value ? <Section>
     <div className="text">
        <h1>{heading}</h1>
        <p>{para}</p>
     </div>
     <div className="image">
        <img src={`/images/image${imageNo}.png`} alt="" />
        <video autoPlay muted loop  src={`/videos/video${videoNo}.m4v`}></video>
     </div>
 </Section>
  :  
 <Section1>

    
     <div className="image">
        
        
        <img src={`/images/image${imageNo}.${imgType}`} alt="" />
       
        
        
        
        <video autoPlay muted loop  src={`/videos/video${videoNo}.m4v`}></video>
     </div>

     <div className="text">
        <h1>{heading}</h1>
        <p>{para}</p>
     </div>
    

 </Section1>

    
  )
}

export default Sections

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
           /* border: 2px solid white; */
           
        }

        video{
            position: relative;
            height: 18em;
        }
    }

    
   
`
const Section1 = styled(Section)`

.text{
    padding-left: 5px;
    h1{
      max-width: 500px;
    }
    
}

`


