import React from 'react'
import styled from 'styled-components'


import Buttons from './Buttons'
import { MdNavigateNext } from "react-icons/md";
import Faq from './Faq';

const Questions = () => {
  return (
    <Container>
        <h1>Frequently Asked Questions</h1>

        <div className="dropDowns">
            <Faq text="What is Netflix ?"/>
            <Faq text="How much does Netflix cost?"/>
            <Faq text="Where can I watch?"/>
            <Faq text="How do I cancel?"/>
            <Faq text="What can I watch on Netflix?"/>
            <Faq text="Is Netflix good for kids?"/>
        </div>
        <br />
        <br />
        <br />
        <p>Ready to watch? Enter your email to create or restart your membership.</p>

        <div className="inputs">
            <input type="text" placeholder='email address' />
            <Buttons isRed={true} text="Get Started" icon={<MdNavigateNext fontSize="34px"  />} />
            </div>
    </Container>
  )
}

export default Questions

const Container = styled.div`


max-height: fit-content;
margin-top: 10px;
background-color: black;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1 auto;

h1{
    margin-top: 30px;
    font-size: 2rem;
    font-weight: bold;
}

.dropDowns{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

p{
    font-size: 20px;
    font-weight: 400;
}

.inputs{
        z-index: 1;
        justify-content: center;
        margin: 0 auto;
        display: flex;
        gap: 20px;
        margin-top: 30px;
        margin-bottom: 40px;

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


`

