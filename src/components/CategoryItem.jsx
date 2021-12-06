import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    flex-direction: column;
    padding: 15px;
    justify-content: space-between;
    justify-items: center;
    font-family: "Lucida Bright";
    font-size: 16px;
    align-items: center;
`
const Item = styled.div`
    justify-content: center;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            
            <Link to={`/songs/${item.name}`} style={{ textDecoration: 'underline'}}>
                <Item>{item.name}</Item>
            </Link>
        </Container>
    )
}

export default CategoryItem
