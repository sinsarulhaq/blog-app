import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../../firebsae";

function PostDetails() {
  const [post, setPost] = useState('')
  const [name, setName] = useState('')
  const {id} = useParams()
  console.log(id);
  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          console.log(doc.data().user);
          setName(doc.data().user);
          setPost(doc.data());
        }
      });
  },[id])
  return (
    <>
      <Author>
        <img
          src={name.photo}
          alt=""
        />
        <Name>
          <span>{name.name}</span>
          <span>{moment.unix(name.time).format("MMMM DD , h:mma")}</span>
          {/* <span>{name.time.toDate().toLocaleDateString()}</span> */}
          {/* article.actor.date.toDate().toLocaleDateString() */}
        </Name>
      </Author>
      <Container>
        <Content>
          <Title>{post.title}</Title>
          <Image src={post.image} />
          <Body>{post.body}</Body>
        </Content>
      </Container>
    </>
  );
}

export default PostDetails;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Author = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 310px;
  background-color: rgba(0, 0, 0, 0.1);
  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
  @media(max-width: 768px) {
    padding-left: 10px;
  }
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
  padding: 10px;
  span{
    font-size: 14px;
    padding: 2px;
    color: rgba(0, 0, 0, 0.6);
  }
`;
const Content = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  @media(max-width: 768px) {
    width: 90%;
  }
`;
const Title = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 500;
  margin-top: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
  border-radius: 5px;
  @media(max-width: 768px) {
    width: 100%;
    height: 250px;
    object-fit: contain;
  }
`;
const Body = styled.h4`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 1.5px;
`;
