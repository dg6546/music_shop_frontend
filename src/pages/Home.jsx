import React from "react";
import Category from "../components/Category";
import styled from "styled-components";
import ItemsPage from "../components/ItemsPage";
import { useLocation } from 'react-router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  flex: 1;
  background-color: lightblue;
`;

const Right = styled.div`
  flex: 8;
`;

const MainBody = styled.div`
  display: flex;

`;

const Home = () => {
  
const location = useLocation();
const cat = location.pathname.split("/")[2];

  return (
    <Container>
      <MainBody>
        <Left>
          <Category />
        </Left>
        <Right><ItemsPage cat={cat} /></Right>
      </MainBody>
    </Container>
  );
};

export default Home;
