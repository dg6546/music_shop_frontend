import React from 'react'
import styled from 'styled-components'
import { useState } from "react";
import { Redirect } from 'react-router';
import axios from "axios";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightcyan;
    
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 40px;
`
const Input = styled.input`
    flex: 1;
    font-size: 16px;
    min-width: 40%;
    padding: 10px;
    margin: 20px 10px 0px 0px;
`
const Button = styled.button`
    margin-top: 20px;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Outercontainer = styled.div`
    display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`



const Login = ({username, setUsername, password, setPassword, setAuth}) => {
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/auth/login",{
            'username': username,
            'password': password
         })
         .catch(e => {setError(true); setMessage(e.message);})
         .then(response => {
                setAuth(true);
                <Redirect to="/" />
         })
    }
    return (
        <Outercontainer>
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Input placeholder="Username" required onChange={ (e) => setUsername(e.target.value) }/>
                    <Input placeholder="Password" required onChange={ (e) => setPassword(e.target.value) }/>
                    <Button type='submit'>Login</Button>
                    {error && <div>{message}</div>}
                </Form>
            </Wrapper>
        </Container>
        </Outercontainer>
    )
}

export default Login
