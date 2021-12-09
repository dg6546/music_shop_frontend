import React, { useEffect, useState }  from 'react';
import styled from "styled-components";
import { useSelector, useDispatch  } from "react-redux";
import { getCart } from "../actions/index"
import axios from 'axios';


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
    
`

const InputContainer = styled.div`
    
`

const Title = styled.h1`
    
`

const Form = styled.form`
    
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
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
            
        axios.post("http://localhost:5000/api/cart",{} ,{headers: {
            'Content-Type': 'application/json'
        },
        //credentials:'include',
        withCredentials: true
    })
        .catch((err) => console.log("Cart error "+err))
        .then((res) =>{
            console.log(res);
                try{
                    dispatch(
                        getCart(
                            res.data._id,
                            res.data.totalPrice,
                            res.data.totalQuantity,
                            res.data.products
                            )
                    );
                    setLoading(false);
                }catch(err){
                    console.log(err)
                }
                
            })
    }, [dispatch])

    const cart = useSelector(state => state.cartReducer);
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

    console.log(cart);
    if (loading){
        return ("loading");
    }
    else return (
        <Container>
            <FormContainer>
            <Form>
                <Title>Create Account</Title>
                <InputContainer> Username <Input placeholder="required" onChange={(e)=>{setUsername(e.target.value)}} /></InputContainer>
                <InputContainer> Password <Input placeholder="required" onChange={(e)=>{setPassword(e.target.value)}} /></InputContainer>
                <Title>Delivery Address</Title>
                <InputContainer> Full Name <Input placeholder="required" required onChange={(e)=>{setFullname(e.target.value)}} /></InputContainer>
                <InputContainer> Company Name <Input placeholder="" onChange={(e)=>{setCompanyname(e.target.value)}} /></InputContainer>
                <InputContainer> Address line 1 <Input placeholder="required" required onChange={(e)=>{setAddress1(e.target.value)}} /></InputContainer>
                <InputContainer> Address line 2 <Input placeholder="" onChange={(e)=>{setAddress2(e.target.value)}} /></InputContainer>
                <InputContainer> City <Input placeholder="required" required onChange={(e)=>{setCity(e.target.value)}} /></InputContainer>
                <InputContainer> Region/State/District <Input placeholder="" onChange={(e)=>{setRegion(e.target.value)}} /></InputContainer>
                <InputContainer> Country <Input placeholder="required" onChange={(e)=>{setCountry(e.target.value)}} /></InputContainer>
                <InputContainer> postal zip code <Input placeholder="required" required onChange={(e)=>{setzipCode(e.target.value)}} /></InputContainer>
                <Button>Submit</Button>
            </Form>
            </FormContainer>
            <Hr/>
            <Info>
            {cart.products.map((product)=>(
                        <Product>
                            <ProductDetail>
                                <Image src={process.env.PUBLIC_URL + "/data/img/" + product.image}/>
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
                                <ProductPrice>Subtotal: {product.unitPrice*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>))}
                        <Summary>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>${cart.totalPrice}</SummaryItemPrice>
                        </SummaryItem>
                    </Summary>
            </Info>
        </Container>
    )
}

export default Checkout
