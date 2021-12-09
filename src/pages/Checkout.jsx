import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../actions/index"
import axios from 'axios';
import Cookies from 'universal-cookie/es6';


const Container = styled.div`
    display: flex;
    min-width: 150px;
    min-height: 100px;
    padding: 10px;
    margin: 10px;
    width: 50%;
    flex-direction: column;
`

const Input = styled.input`
    padding: 5px;
    margin: 5px;
`

const InputContainer = styled.div`
    
`

const Title = styled.h1`
    
`

const Form = styled.form`
    padding: 10px;
`

const FormContainer = styled.div`
    flex: 1;
`

const Button = styled.button`
    
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
    justify-content: space-around;
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
    margin: 20px;
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
`


const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`


const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const UnitPriceDiv = styled.div`
    font-weight: 200;
`

const Info = styled.div`
    flex:1;
    justify-content: space-between;
    justify-items: space-between;
`

const Checkout = () => {
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        axios.post("http://localhost:5000/api/cart", {}, {
            headers: {
                'Content-Type': 'application/json'
            },
            //credentials:'include',
            withCredentials: true
        })
            .catch((err) => console.log("Cart error " + err))
            .then((res) => {
                try {
                    dispatch(
                        getCart(
                            res.data._id,
                            res.data.totalPrice,
                            res.data.totalQuantity,
                            res.data.products
                        )
                    );
                    setLoading(false);
                } catch (err) {
                    console.log(err)
                }

            })
    }, [dispatch])

    const isLogged = cookies.get('username') === undefined ? false : true;
    const cart = useSelector(state => state.cartReducer);
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [zipCode, setzipCode] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLogged) {
            axios.post("http://localhost:5000/api/auth/register", {
                'username': username,
                'password': password,
                'email': email
            })
                .catch((err) => {
                    console.log(err)
                })
                .then((result) => {
                })
        }

        const data = {
            fullName: fullname,
            address: address1 + address2 + city + region + country + zipCode,
            companyName: companyname === "" ? "NA" : companyname
        }
        axios.post("http://localhost:5000/api/checkout", data, {
            headers: {
                'Content-Type': 'application/json'
            },
            //credentials:'include',
            withCredentials: true
        })
            .catch((err) => console.log("checkout error " + err))
            .then((respond) => {
                setPurchaseSuccess(true);
            })
    }
    if (loading) {
        return ("loading");
    }
    else return (
        <Container>
            {!purchaseSuccess ?
                <FormContainer>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        {!isLogged &&
                            <div>
                                <Title>Create Account</Title>
                                <InputContainer> Username <Input placeholder="required" required onChange={(e) => { setUsername(e.target.value) }} /></InputContainer>
                                <InputContainer> Password <Input placeholder="required" type="password" required onChange={(e) => { setPassword(e.target.value) }} /></InputContainer>
                                <InputContainer> Email <Input placeholder="required" required onChange={(e) => { setEmail(e.target.value) }} /></InputContainer>
                            </div>
                        }
                        <Title>Delivery Address</Title>
                        <InputContainer> Full Name <Input placeholder="required" required onChange={(e) => { setFullname(e.target.value) }} /></InputContainer>
                        <InputContainer> Company Name <Input placeholder="" onChange={(e) => { setCompanyname(e.target.value) }} /></InputContainer>
                        <InputContainer> Address line 1 <Input placeholder="required" required onChange={(e) => { setAddress1(e.target.value) }} /></InputContainer>
                        <InputContainer> Address line 2 <Input placeholder="" onChange={(e) => { setAddress2(e.target.value) }} /></InputContainer>
                        <InputContainer> City <Input placeholder="required" required onChange={(e) => { setCity(e.target.value) }} /></InputContainer>
                        <InputContainer> Region/State/District <Input placeholder="" onChange={(e) => { setRegion(e.target.value) }} /></InputContainer>
                        <InputContainer> Country <Input placeholder="required" onChange={(e) => { setCountry(e.target.value) }} /></InputContainer>
                        <InputContainer> postal zip code <Input placeholder="required" required onChange={(e) => { setzipCode(e.target.value) }} /></InputContainer>
                        <Button type="submit">Submit</Button>
                    </Form>
                </FormContainer>
                :
                <div>
                    <Title>Invoice</Title>
                    <span>Full Name: {fullname}</span><br />
                    <span>Company: {companyname}</span><br />
                    <span>Address Line 1: {address1}</span><br />
                    <span>Address Line 2: {address2}</span><br />
                    <span>City: {city}</span><br />
                    <span>Region: {region}</span><br />
                    <span>Country: {country}</span><br />
                    <span>Postcode: {zipCode}</span><br />
                </div>
            }
            <Hr />
            <Summary>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>${cart.totalPrice}</SummaryItemPrice>
                </SummaryItem>
            </Summary>
            <Info>
                {cart.products.map((product) => (
                    <Product>
                        <ProductDetail>
                            <Image src={process.env.PUBLIC_URL + "/data/img/" + product.image} />
                            <Details>
                                <ProductName><b>Song:</b> {product.name}</ProductName>
                                <ProductId><b>ID:</b> {product._id} </ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <UnitPriceDiv>${product.unitPrice}</UnitPriceDiv>
                            <ProductAmountContainer>
                                <ProductAmount>Quantity: {product.quantity}</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>Subtotal: {product.unitPrice * product.quantity}</ProductPrice>
                        </PriceDetail>
                    </Product>))}
            </Info>
            {purchaseSuccess && <div> <span>Your item will be deliveried by 7 days</span> <br /> <Button onClick={() => {
                window.location.replace("/");
                dispatch(
                    getCart(
                        0,
                        0,
                        0,
                        []
                    )
                );
            }}>ok</Button></div>}
        </Container>
    )
}

export default Checkout
