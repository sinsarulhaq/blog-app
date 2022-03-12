import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Contents from "../../Components/Contents";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import db from "../../firebsae";
import { getPostArticle } from "../../redux/actions";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, article } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getPostArticle())
  });

  return (
    <Container>
      {!user && navigate("/")}
      <Header />
      <Image src="/images/blog-banner (1).jpg" />
      <Button><Link to={'/post'} className='link' >Create a post</Link></Button>
      <Content> 
        {article && article.map((post, index) => (
           <Contents post={post} key={index} />
        ))}
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
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const Button = styled.div`
background-color: #0185d8;
width: 140px;
padding: 15px;
margin: 20px;
border-radius: 28px;
display: flex;
align-items: center;
justify-content: center;
.link{
  text-decoration: none;
  color: #fff;
  
}
@media(max-width: 768px){
  margin-left: 20px;
  margin-bottom: 0;
}
`

const Content = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
