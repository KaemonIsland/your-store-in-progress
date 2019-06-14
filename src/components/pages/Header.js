import React from 'react'
import styled from 'styled-components'
import video from '../assets/videos/Berlin-Train.mp4'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    position: relative;
    height: 100vh;
    width: 100%;
`

const HeaderMain = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    background-color: rgba(255, 255, 255, .8);
    width: 40rem;
    box-shadow: 0 .5rem .8rem black;
    border-radius: 1rem;
    padding: .5rem;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);

    @media (max-width: 769px) {
        width: 90%;
    }
`

const HeaderLink = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    padding: 1rem;
    background-color: rgba(255, 255, 255, .8);
    width: 30rem;
    box-shadow: 0 .5rem .8rem black;
    border-radius: 1rem;
    display: flex;
    justify-content: space-evenly;
    font-weight: bold;
    font-size: 1.5rem;
    transition: all 200ms ease-out;
    
    & a {
        color: black;
    }

    @media (max-width: 769px) {
        width: 50%;
    }

`

const BackgroundVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;
    opacity: .3;
    overflow: hidden;
`

const Video = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderMain>Your Store In Progress</HeaderMain>
            <HeaderLink>
                <Link to="/products">Start Shopping!</Link>
            </HeaderLink>
            <BackgroundVideo>
                <Video autoPlay muted loop >
                    <source src={video} type="video/mp4"/>
                    Your browser is not supported!
                </Video>
            </BackgroundVideo>
        </HeaderContainer>
    )
}

export default Header;