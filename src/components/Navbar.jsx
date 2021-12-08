import { Badge } from "@material-ui/core";
import { Album, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {logout} from "../actions/index"
const Container = styled.div`
  height: 60px;
  background-color: #4998b3;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${mobile({ padding: "10px", flexDirection: "column", justifyContent: "space-between" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ padding: "10px", justifyContent: "space-between" })}
`;

const Logo = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: xx-large;
  font-weight: bold;
  cursor: pointer;
  color: black;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: white;
  justify-content: center;
  width: 100%
`;

const Input = styled.input`
  border: none;
  font-size: 16px;
  width: 100%;
    :focus{
        outline: none;
    }
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  color:black;
`;

const UsernameSpan = styled.span`
  
`


const Navbar = () => {
  const isLogged = useSelector(state => state.userReducer.isLogged);
  const username = useSelector(state => state.userReducer.username);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>
              MusicStore
              <Album />
            </Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search music..." />
            <Search style={{ color: "gray", fontSize: "16px", cursor: "pointer" }} />
          </SearchContainer>
        </Center>
          {
            isLogged ?
            <Right>
            <MenuItem><UsernameSpan>{username}</UsernameSpan></MenuItem>
            <MenuItem onClick={()=>{dispatch(logout())}}>Logout</MenuItem>
            </Right>
            :
            <Right>
              <Link to="/register" style={{ textDecoration: 'none' }}>
              <MenuItem>Register</MenuItem>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <MenuItem>Login</MenuItem>
            </Link>
            </Right>
          }
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
