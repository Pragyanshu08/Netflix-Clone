import React from 'react'
import styled from 'styled-components'

const FooterContent = ({text}) => {
  return (
    <div>
       <p><A href="">{text}</A></p>
    </div>
  )
}

export default FooterContent

const A = styled.a`
color: #BEBEBE;
font-weight: 200;
`