import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAPI } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user } = useSelector((state) => state.data);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(LogoutAPI())
    navigate('/')
  }
  return (
    <Container>
    <Wrap>
        <Left>
        <Logo>DEV BLOGS</Logo>
        {/* <Menu>
            <MenuItem>Create post</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Contact</MenuItem>
        </Menu> */}
        </Left>
        <User>
        <span>welcome {user ? user.displayName : ''}</span>
        <Button onClick={handleSubmit}>Logout</Button>
        </User>
    </Wrap>
</Container>
  );
}

export default Header;
const Container = styled.div`
 @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
height: 70px;
font-family: "Poppins", sans-serif;
/* background-color: #7900FF; */
background-color: rgba(0, 0, 0, 0.1);
color: black;
@media(max-width: 768px){
  height: 75px;
}
`
const Wrap = styled.div`
padding: 5px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Left = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
letter-spacing: 2px;
`



const Logo = styled.h1`
font-size: 20px;
font-weight: 700;
margin-right: 5px;
font-family: 'Poppins', sans-serif;
`


const Button = styled.button`
border: none;
outline: none;
padding: 7px 15px;
border-radius: 5px;
cursor: pointer;
background-color: black; 
color: #fff;
font-size: 15px;
`

const User = styled.div`
width: 20%;
display: flex;
justify-content:space-between ;
align-items: center;
line-height: 1;
@media(max-width: 768px){
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    padding: 4px;
    span{
      padding-top: 0;
      padding-bottom: 6px;
      font-family: "Poppins", sans-serif;
    }
}
`