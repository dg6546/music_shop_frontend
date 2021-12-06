import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const InfoContainer = styled.div`
    flex:1;
    justify-content: space-between;
    padding: 5px;
    flex-wrap: wrap;
`

const ImgContainer = styled.div`
    flex:1;
    max-width: 350px;
    min-width: 150px;
    padding: 10px;
`

const Title = styled.h1`
    padding: 5px;
    font-weight: 500;
    color: teal;
`
const Category = styled.div`
padding: 5px;
`
const Composer = styled.div`
padding: 5px;
`
const Description = styled.div`
padding: 5px;
`
const Published = styled.div`
padding: 5px;
`
const Price = styled.div`
padding: 25px 5px 25px 5px;
font-weight: 500;
font-size: 20px;
color: blueviolet;
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
    margin: 15px 5px;
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
padding: 1px;
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

const ItemDetail = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [song, setSong] = useState({});
    const [error, setError] = useState(null);
    useEffect(() => {
            fetch('http://localhost:5000/api/searchSongs?id=' + id, {
                'method': 'GET',
                'Content-Type': 'application/json',
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        setSong(result);
                    },
                    (err) => {
                        setError(err);
                    }
                );
    }, [id])
    const currentSong = song[0];
    if (error) {
        return (<Container>Error: {error.message}</Container>)
    }
    else if (currentSong === undefined) {
        return (<Container>no result found</Container>)
    }
    else{
    
    return (
        <Container>
            <Wrapper>
                <ImgContainer> <Image src={process.env.PUBLIC_URL + "/data/img/" + currentSong.image} /> </ImgContainer>
                <InfoContainer>
                    <Title>{currentSong.name}</Title>
                    <Category><b>Category:</b> {currentSong.category}</Category>
                    <Composer><b>Composer:</b> {currentSong.composer}</Composer>
                    <Published><b>Published:</b> {currentSong.publish}</Published>
                    <Description><b>Description:</b> {currentSong.description}</Description>
                    <Price>${currentSong.price}</Price>
                    <ReactAudioPlayer
                        src={process.env.PUBLIC_URL + "/data/mp3/" + currentSong.clip}
                        controls
                        controlsList="nodownload"
                    />
                    <AddContainer>
                        <QuantityContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </QuantityContainer>
                        
                    </AddContainer>
                    <AddToCartButton>Add to Cart</AddToCartButton>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
    }
}

export default ItemDetail
