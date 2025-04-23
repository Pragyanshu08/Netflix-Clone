import React from 'react'
import styled from 'styled-components'
import { IoIosAdd } from "react-icons/io";
const Faq = ({text}) => {
  return (
    <Faq1> <p>{text}</p> <IoIosAdd fontSize="34px" /></Faq1>
  )
}

export default Faq


const Faq1 = styled.div`
  width: 70vw;
  background-color: #3B3B3B;
  display: flex;
  align-items: center;
  margin: auto;
  padding: 20px;
  justify-content: space-between;
  transition: 0.2s ease-in;

  p{
    font-size: 20px;
  }

  &:hover{
    background-color: #525252;
    transition: 0.3s ease-in;
  }
`