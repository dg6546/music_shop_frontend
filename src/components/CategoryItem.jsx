import React from 'react'
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
`


const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Item>{item.name}</Item>
        </Container>
    )
}

export default CategoryItem
