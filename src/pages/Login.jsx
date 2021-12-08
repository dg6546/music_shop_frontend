import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router';
import axios from "axios";
import {login} from "../actions/index"
import { useDispatch } from 'react-redux';
import { CatchingPokemon } from '@mui/icons-material';


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

const ErrorMessage = styled.div`
    color: red;
`


const Login = () => {
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/api/auth/login";

        const params = {
            'username': username,
            'password': password
        }
        axios.defaults.withCredentials = true;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            //credentials:'include',
            withCredentials: true
        }

        axios.post(url, params, config)
            .then((result) => {
                console.log(result.status);
                console.log(result.headers);
                console.log(result.data);
                console.log(result.config);
                dispatch(login(result.data.username));
                <Redirect to="/" />
            })
            .catch((err) => {
                setError(true);
                if(err.response){
                    setMessage(err.response.data);
                }else{
                    setMessage("failed");
                }
                console.log(err);
            })
    }
    return (
        <Outercontainer>
            <Container>
                <Wrapper>
                    <Title>Login</Title>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Input placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                        <Input placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                        <Button type='submit'>Login</Button>
                        {error && <ErrorMessage>{message}</ErrorMessage>}
                    </Form>
                </Wrapper>
            </Container>
        </Outercontainer>
    )
}

export default Login
