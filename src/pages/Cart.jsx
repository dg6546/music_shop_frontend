import { Add, Remove } from '@material-ui/icons'
import React, {useSelector} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ReactAudioPlayer from 'react-audio-player';

const Container = styled.div`
height:100vh;
width: 100vw;
`

const Wrapper = styled.div`
padding: 20px;
`

const Top = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 20px;
`

const ContinueShoppingButton = styled.button`
    margin-top: 20px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const CheckoutButton = styled.button`
    border: 1px solid teal;
    padding: 15px 20px;
    margin-top: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 18px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex:3;
`


const Product = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-space-around;
`

const ProductName = styled.span`
padding-bottom: 5px;
`

const ProductId = styled.span`
padding-bottom: 5px;
`

const PriceDetail = styled.div`
    flex: 1;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryCheckoutButton = styled.button`
    border: 1px solid teal;
    padding: 15px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 18px;
    width: 100%;
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`


const Cart = () => {
    const cart = useSelector(state => state.cart);
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Top>
                    <ContinueShoppingButton>Continue shopping</ContinueShoppingButton>
                    <Title>Your Cart (2)</Title>
                    <CheckoutButton>CheckOut</CheckoutButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product)=>(
                        <Product>
                            <ProductDetail>
                                <Image/>
                                <Details>
                                    <ProductName><b>Song:</b> {product.name}</ProductName>
                                    <ProductId><b>ID:</b> {product.id} </ProductId>
                                    <ReactAudioPlayer
                                        src={process.env.PUBLIC_URL + "/data/mp3/m1.mp3"}
                                        controls
                                        controlsList="nodownload"
                                        style={{padding:'5px'}}
                                    />
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}]</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>))}
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryCheckoutButton>CheckOut Now</SummaryCheckoutButton>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart
