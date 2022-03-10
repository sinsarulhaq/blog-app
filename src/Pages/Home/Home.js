import React from "react";
import styled from "styled-components";
import Contents from "../../Components/Contents";
function Home() {
  return (
    <Container>
      <Image src="/images/blog-banner (1).jpg" />
      <Content>
        <Contents />
        <Contents />
        <Contents />
        <Contents />
        <Contents />
        <Contents />
        <Contents />
      </Content>
    </Container>
  );
}

export default Home;
const Container = styled.div`
/* position: absolute; */
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
  @media(max-width: 768px){
    width: 100%;
    height: 250px;
  }
`;
const Content = styled.div`
/* position: relative; */
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
`