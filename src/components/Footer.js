import React from 'react'
import styled from 'styled-components'
import FooterContent from './FooterContent'
const Footer = () => {
  return (
    <FooterSection>

            <div className="upper">
            <FooterContent text="Questions? call 000-800-919-1694" />
            </div>
        <Content>
            

           <div className='lower'>
           <div className="first">
              
              <FooterContent text="FAQ" />
              
              <FooterContent text="Privacy" />
              <FooterContent text="Speed Test" />
              <FooterContent text="Investor Relation" />
              
            </div>
            <div className="first">
              <FooterContent text="Help center" />
              <FooterContent text="Jobs" />
              <FooterContent text="Cookie Preferences" />
              <FooterContent text="Legal Notices" />
            </div>
            <div className="first">
              
              <FooterContent text="Account" />
              <FooterContent text="Ways to Watch" />
              <FooterContent text="Corporate Information" />
              <FooterContent text="Only on Netflix" />
            </div>
            <div className="first">
              <FooterContent text="Media Center" />
              <FooterContent text="Terms of Use" />
              <FooterContent text="Contact us" />
            </div>
           </div>
        </Content>
    </FooterSection>
  )
}

export default Footer

const FooterSection= styled.div`
  
  max-width: 100%;
  margin-top: 8px;
  height: 50vh;
  background-color: black;

  .upper {
    max-width: 1100px;
    height: 2rem;
    margin: 0 auto;
    font-size: 24px;
    
  }

`






const Content = styled.div`
  background-color: black;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  line-height: 3em;
  display: flex;
  margin-top: 2rem;
  

  

  .lower{
   
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`