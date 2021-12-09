import React, { useEffect } from 'react';
//import { songs } from '../data';
import styled from "styled-components";
import Item from './Item'
import { useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TitleDiv = styled.div`
    width: 100%;
    padding: 25px;
    font-weight: 800;
`

const ItemsPage = ({ cat, ty }) => {
    console.log(cat, ty);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    

    if (typeof(cat) === 'undefined'){
        cat = "";
    }
    useEffect(() => {
        if (ty === "search"){
            axios.get('http://localhost:5000/api/searchSongs?search=' + cat)
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            })
            .then((result) => {
                console.log(result);
                    setIsLoaded(true);
                    setItems(result.data);
                }
            )
        }else{
            axios.get('http://localhost:5000/api/searchByCategories/?category=' + cat)
            .catch(error => {
                setIsLoaded(true);
                setError(error);
            })
            .then((result) => {
                console.log(result);
                    setIsLoaded(true);
                    setItems(result.data);
                }
            )
        }
    }, [cat, ty]);

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
                {cat? <TitleDiv>{cat}</TitleDiv> :""}
                {items.map((songs, index) => (
                    <Item key={index} item={songs}  />
                ))}
            </Container>
        )
}

export default ItemsPage
