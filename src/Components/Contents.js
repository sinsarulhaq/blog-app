import React from "react";
import styled from "styled-components";

function Contents({post}) {
  return (
    <Container>
      <Image src={post.image} />
      <Body>{post.body}</Body>
      <Auther><span>{post.user.name}</span></Auther>
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
`;
const Image = styled.img`
  padding: 10px;
  height: 150px;
  width: 400px;
  object-fit: cover;
  @media(max-width: 769px){
    padding-right: 60px;
  }
`;
const Body = styled.p`
padding: 10px;
overflow: hidden;
margin-bottom: 10px;
border-bottom: 1px solid rgba(0, 0, 0, 0.1) ;
&:hover{
  text-decoration: underline;
  color: #00affe;
}
`;
const Auther = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
display: flex;
flex-direction: row;
span{
  padding-left: 10px;
  margin-bottom: 8px;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
}
`