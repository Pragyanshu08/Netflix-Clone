import React from 'react'
import styled from 'styled-components'




const Buttons = (props) => {
  return (
    props.isRed?   <SRButton>{props.text}{props.icon}</SRButton> :  <SButton>{props.text}</SButton>
  )
}

export default Buttons

const SButton = styled.button`
  width: 126px;
  font-size: 20px;
  
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  color: white;
  background-color: transparent;
  border: 1px solid white;

  
`;

const SRButton = styled.button`

  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  color: white;
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
 align-items: center;
 transition: 0.4s ease-in;

 &:hover{
    background-color: #880808;
    transition: 0.3s ease-in;
  }
`;

