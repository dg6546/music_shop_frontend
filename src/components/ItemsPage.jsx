import React from 'react';
import { songs } from '../data';
import styled from "styled-components";
import Item from './Item'

const Container = styled.div`
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-items: space-between;
    justify-content: space-between;
    max-width: 90%;
`

const ItemsPage = () => {
    return (
        <Container>
            {songs.map(songs => (
                <Item item={songs} key={songs.id}/>
            ))}
        </Container>
    )
}

export default ItemsPage
