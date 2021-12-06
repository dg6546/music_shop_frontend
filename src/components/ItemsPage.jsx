import React, { useEffect } from 'react';
//import { songs } from '../data';
import styled from "styled-components";
import Item from './Item'
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ItemsPage = ({ cat }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    if (typeof(cat) === 'undefined'){
        cat = "";
    }
    useEffect(() => {
        fetch('http://localhost:5000/api/searchByCategories/?category=' + cat, {
            'method': 'GET',
            'Content-Type': 'application/json',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [cat]);

    if (error) {
        return (
            <Container>
                Error: {error.message}
            </Container>
        )
    } else if (!isLoaded) {
        return (
            <Container>
                Loading...
            </Container>
        );
    }
    
    return (
            <Container>
                {items.map((songs, index) => (
                    <Item key={index} item={songs}  />
                ))}
            </Container>
        )
}

export default ItemsPage
