import React, { useState } from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'
import { MdNavigateNext } from "react-icons/md";
const Hero = () => {


    

  return (
    <Container>
        <nav className='nav'>
           <div className='logoSvg'>
            <img width={150} height={150} src="/images/logo.svg" alt="" />
           </div>
           <div className="btns">
            <Buttons text="English"/>
            <Buttons
            isRed={true}
            text="Sign In"/>
           </div>
        </nav>

        <div className="contentBox">
            <div className="content">
             <h1>Unlimited movies, TV shows and more</h1>
             <p>Watch anywhere. Cancel anytime.</p>
             <p>Ready to watch? Enter your email to create or restart your membership.</p>

             <div className="inputs">
            
            
            <input type="text"  placeholder='email address' />
            
            <Buttons isRed={true} text="Get Started" icon={<MdNavigateNext fontSize="34px"  />} />
            </div>

            </div>

          
        </div>
       
        <div className="box">
        </div>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  background-image: url("/images/background.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  max-width: 100%;
  height: 100vh;
  position: relative;

  

  .nav{
    display: flex;
    max-width: 80vw;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    height: 82px;
    

    .btns{
        display: flex;
        flex-direction: row;
        gap: 24px;
        z-index: 10;
    }

    .logoSvg{
        z-index: 1;
    }

    

  }

  .contentBox{
    width: 100%;
    height: calc(100vh - 162px );
    display: grid;
    align-items: center;
    
    

    .content{
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      color: white;
      max-width: 1000px;
      margin: 0 auto;
      margin-top: 100px;
      
     
      h1 ,p{
        z-index: 1;
        
      }

      h1 {
        font-size: 3em;
        font-weight: 900px;
      }

      p{
        font-size: 18px;
        font-weight: 800px;
      }
      
    
      }

      .inputs{
        z-index: 1;
        justify-content: center;
        margin: 0 auto;
        display: flex;
        gap: 20px;
        margin-top: 30px;

        

        input{
          border: none;
          border: 0.2px solid white;
          /* border-radius: 5px; */
          width: 330px;
          padding: 10px;
          background-color: rgba(23 ,23 , 23 , 0.7);
          color: white;
          font-size: 20px;
           
          &:focus::placeholder{
            transform: translateY(-15px);
            color: 	white;
            font-size: 16px;
          }

            
        }

        button{
          width: 212px;
        }
      }
    

  }


  .box{
    background-color: black;
    opacity: 0.65;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
  }
  
`

