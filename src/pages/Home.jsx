import React from "react";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ItemsPage from "../components/ItemsPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <MainBody>
        <Left>
          <Category />
        </Left>
        <Right><ItemsPage /></Right>
      </MainBody>
    </Container>
  );
};

export default Home;
