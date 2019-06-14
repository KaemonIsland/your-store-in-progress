import React from 'react'
import styled from 'styled-components'
import video from '../assets/videos/Berlin-Train.mp4'
import { Button } from '../styled-components/base'

const HeaderContainer = styled.header`
    position: relative;
`

const HeaderMain = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    background-color: rgba(255, 255, 255, .8);
    width: 60%;
    box-shadow: 0 .5rem .8rem black;
    border-radius: 1rem;
    padding: .5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 200%);
`

const BackgroundVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;
    opacity: .10;
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
            <Button>Register or Login</Button>
            <Button>Start Shopping</Button>
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