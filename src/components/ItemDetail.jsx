import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player';


const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const InfoContainer = styled.div`
    flex:1;
`

const ImgContainer = styled.div`
    flex:1;
`

const Title = styled.h1`

`
const Category = styled.div`

`
const Composer = styled.div`

`
const Description = styled.div`

`
const Published = styled.div`

`
const Price = styled.div`

`

const Image = styled.img`
    width: 100%;
`

const QuantityContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

`

const AddToCartButton = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: gray;
    }
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const ItemDetail = (item) => {
    return (
        <Container>
            <ImgContainer> <Image src={process.env.PUBLIC_URL + "/data/img/" + item.img} /> </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Category>{item.category}</Category>
                <Composer>Composer: {item.composer}</Composer>
                <Published>Published: {item.published}</Published>
                <Description>Description: {item.description}</Description>
                <Price>${item.price}</Price>
                <ReactAudioPlayer
                    src={process.env.PUBLIC_URL + "/data/mp3/" + item.mp3}
                    controls
                    controlsList="nodownload"
                />
                <AddContainer>
                    <QuantityContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </QuantityContainer>
                    <AddToCartButton>Add to Cart</AddToCartButton>
                </AddContainer>

            </InfoContainer>
        </Container>
    )
}

export default ItemDetail
