import React from 'react'
import styled from 'styled-components'
import video from '../assets/videos/Berlin-Train.mp4'

const HeaderContainer = styled.header`
    position: relative;
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