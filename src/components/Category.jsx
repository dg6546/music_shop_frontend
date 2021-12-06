import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Title = styled.h1`
    padding: 10px;
    font-size: 20px;
    text-align: center;
`
const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    border: none;
`

const Category = () => {
    return (
        <Container>
            <Title>Category</Title>
            <Hr/>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Category
