import React from "react";
import styled from "styled-components";

function Contents() {
  return (
    <Container>
      <Image src="/images/blog.jpg" />
      <Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt
        ut quidem ipsam nam quasi modi voluptatibus sapiente blanditiis
        officiis! Maiores corrupti sapiente recusandae dolore velit non cumque
        ea libero?Lorem ipsum dolor sit amet
      </Body>
      <Auther><span>Sinsarul haq vm</span></Auther>
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
`;
const Image = styled.img`
  padding: 10px;
  height: 150px;
  width: 400px;
  object-fit: cover;
`;
const Body = styled.p`
padding: 10px;
overflow: hidden;
margin-bottom: 7px;
border-bottom: 1px solid rgba(0, 0, 0, 0.1) ;
&:hover{
  text-decoration: underline;
  color: #00affe;
}
`;
const Auther = styled.div`
display: flex;
flex-direction: row;
span{
  padding-left: 10px;
  margin-bottom: 8px;
  font-size: 12px;
}
`