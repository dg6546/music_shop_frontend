import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

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

const Login = () => {
    return (
        <Outercontainer>
        <Navbar/>
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Button>Login</Button>
                </Form>
            </Wrapper>
        </Container>
        </Outercontainer>
    )
}

export default Login