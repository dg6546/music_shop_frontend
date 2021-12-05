import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import styled from "styled-components";



const Container = styled.div`
    
`


const Category = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Category
