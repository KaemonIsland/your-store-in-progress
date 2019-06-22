import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled-components/base'

const FooterContainer = styled.footer`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 100%;
    grid-template-rows: 35% 50% 15%;
    height: 20rem;
    text-align: center;
    border-top: 1px solid black;
`

const FooterButton = styled(Button)`
    width: 30%;
`

const FooterNav = styled.div`
    background-color: darkgrey;
    color: white;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
    padding: 2rem;
    & ul {
        list-style-type: none;
    }
`

const FooterCompany = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`
const FooterCompanyLang = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 30%;
`



const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <p>Subscribe to be in the know about new products.</p>
                <FooterButton>Subscribe</FooterButton>
            </div>

            <FooterNav>
                <ul>
                    <li><strong>Shop</strong></li>
                    <li>Gifts</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li><strong>About</strong></li>
                    <li>YSIP</li>
                    <li>Policies</li>
                    <li>Investors</li>
                    <li>Careers</li>
                </ul>
                <ul>
                    <li><strong>Help</strong></li>
                    <li>Help Center</li>
                </ul>
            </FooterNav>
            <FooterCompany>
                <FooterCompanyLang>
                    <div>United States</div>
                    {' | '}
                    <div>English(US)</div>
                    {' | '}
                    <div>$(USD)</div>
                </FooterCompanyLang>
                <FooterCompanyLang>
                    <div>2019 Your Store in Progress</div>
                </FooterCompanyLang>
            </FooterCompany>
        </FooterContainer>
    )
}

export default Footer;