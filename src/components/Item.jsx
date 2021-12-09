import { Search, ShoppingCart } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from "styled-components";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import { Add, Remove } from '@material-ui/icons'
import axios from 'axios';
import {getCart} from "../actions/index"
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie/es6';
const Container = styled.div`
    display: flex;
    min-width: 150px;
    min-height: 100px;
    padding: 10px;
    margin: 10px;
    width: 50%;
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
    flex: 1;
    justify-content: center;
    align-content: center;
    text-align: center;
`

const Info = styled.div`
    margin-right: 50px;
    padding: 5px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    justify-items: space-between;
`

const Title = styled.h1`
    font-size: 16px;
    color: teal;
`

const Price = styled.div`
    padding: 15px 5px;
    color: blueviolet;
`


const Icon = styled.div`
    cursor: pointer;
    color: black;
`
const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 25px;
    justify-content: space-between;
    align-items: center;
`

const PlayerWrapper = styled.div`
    padding: 5px;
    width: 50%;
    flex:1;
`
const QuantityContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`

const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const NewArrival = styled.span`
    color: red;
    padding: 5px 0px 5px;
`

const MessageDiv = styled.div`
    color: red;
    justify-content: center;
`

const Item = ({ item }) => {
    const [message, setMessage] = useState("");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const cookies = new Cookies();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    }

    const handleAddCart = () =>{
        console.log("id: " + item._id + " type: " + typeof(item._id));
        console.log("quantity" + quantity + " type: " + typeof(quantity));
        axios.post("http://localhost:5000/api/cart/add",{
            id: item._id,
            quantity: quantity
        } ,config)
        .catch((err) => {
            if(err.response){
                setMessage(err.response.data);
            }else{
                setMessage("failed connecting to server");
            }
            console.log(err);})
        .then( (res) => {
            console.log(res.data);
            console.log("products:" + res.data.products);
            setMessage("Added to cart!");
        })
    }

    const handleQuantity = (type) =>{
        if(type === "dec"){
            if(quantity - 1 <= 0){
                setQuantity(1);
            }else{
                setQuantity(quantity - 1);
            }
        }else{
            setQuantity(quantity + 1);
        }
    }
    return (
        <Container>
            <ImageWrapper><Image src={process.env.PUBLIC_URL + "/data/img/" + item.image} /></ImageWrapper>
            <Info>
                <Title>{item.name}</Title>
                {
                    item.new_arrival === 'Yes' && <NewArrival>New Arrival!</NewArrival>
                }
                <Price>${item.price}</Price>
                <PlayerWrapper>
                    <ReactAudioPlayer
                        src={process.env.PUBLIC_URL + "/data/mp3/" + item.clip}
                        controls
                        controlsList="nodownload"
                    />
                </PlayerWrapper>
                <IconWrapper>
                    <Icon> <Link to={`/song/${item._id}`} style={{ textDecoration: 'none', color: "black" }}> <Search /> </Link>  </Icon>
                    <AddContainer>
                        <QuantityContainer>
                            <Remove onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("inc")}/>
                        </QuantityContainer>
                    </AddContainer>
                    <Icon> <ShoppingCart onClick={()=>handleAddCart()}/> </Icon>
                    
                </IconWrapper>
                {message? <MessageDiv>{message}</MessageDiv> : ""}
            </Info>
        </Container>
    )
}

export default Item
