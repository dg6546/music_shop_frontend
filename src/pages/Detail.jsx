import React from "react";
import styled from "styled-components";
import ItemDetail from "../components/ItemDetail";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;


const MainBody = styled.div`
  display: flex;
  height: 100%;
`;

const Detail = (item) => {
  return (
    <Container>
      <MainBody>
        <ItemDetail item={item}/>
      </MainBody>
    </Container>
  );
};

export default Detail;
