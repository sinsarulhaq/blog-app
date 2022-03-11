import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state) => state.data);
  return (
    <Container>
      <Logo>Sinsar's Blog</Logo>
      <Details>
        {user ? <img src={user.photoURL} alt="" />: ''}
        <Button>Logout</Button>
      </Details>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  height: 55px;
  width: 100%;
  line-height: 1;
`;

const Logo = styled.div`
  display: flex;
  width: 80%;
  font-size: 30px;
  font-weight: 600;
  margin-left: 15px;
`;

const Details = styled.div`
width: 20%;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
line-height:1 ;
margin: auto;
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;
const Button = styled.div`

`;
