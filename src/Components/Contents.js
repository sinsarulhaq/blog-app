import { NoEncryptionTwoTone } from "@mui/icons-material";
import { now } from "moment";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Contents({post}) {
 
  return (
    <Container>
      <Image src={post.image} />
      <Link to={`/postdetails/${post.id}`} className='link'>
      <Body>{post.body}</Body>
      </Link>
    </Container>
  );
}

export default Contents;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  background-color: #fff;
  margin: 20px;
  max-height: 300px;
  overflow: hidden;
  border-radius: 5px;
  .link{
    text-decoration: none;
    color: black;
  }
`;
const Image = styled.img`
  padding: 10px;
  height: 150px;
  width: 400px;
  object-fit: cover;
  @media(max-width: 768px){
    padding-right: 60px;
  }
`;
const Body = styled.p`
margin-top: 9px;
padding: 6px;
overflow: hidden;
&:hover{
  text-decoration: underline;
  color: #00affe;
}
`;
