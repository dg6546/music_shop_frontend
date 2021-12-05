import { Search, ShoppingCart } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import ReactAudioPlayer from 'react-audio-player';

const Container = styled.div`
    display: flex;
    min-width: 280px;
    width: 500px;
    height: 350px;
    padding: 5px;
    margin: 5px;
`

const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    min-height: 200px;
    min-width: 300px;
`

const ImageWrapper = styled.div`
    height: 300px;
    width: 300px;
    justify-content: center;
    align-content: center;
    text-align: center;
`

const Info = styled.div`
    padding: 5px;
`

const Title = styled.h1`
    font-size: 16px;
`

const Price = styled.div`
    padding: 15px 5px;
`


const Icon = styled.div`
    cursor: pointer;
    padding: 5px;
`
const IconWrapper = styled.div`
    display: flex;
`


const Item = ({ item }) => {
    return (
        <Container>
            <ImageWrapper><Image src={process.env.PUBLIC_URL + "/data/img/" + item.img}/></ImageWrapper>
            
            <Info>
                <Title>{item.title}</Title>
                <Price>${item.price}</Price>
                <ReactAudioPlayer
                    src= {process.env.PUBLIC_URL + "/data/mp3/" + item.mp3}
                    controls
                    controlsList="nodownload"
                    />
                <IconWrapper>
                <Icon> <ShoppingCart/> </Icon>
                <Icon> <Search/>  </Icon>
                </IconWrapper>
            </Info>
        </Container>
    )
}

export default Item
