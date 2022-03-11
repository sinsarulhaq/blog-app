import React from "react";
import styled from "styled-components";

function PostDetails() {
  return (
    <>
      <Author>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHfAoh15IzWSw/profile-displayphoto-shrink_400_400/0/1632934289029?e=1652313600&v=beta&t=gtLjlllFQZyd6NA0cPZZY6OVLwIxkVqqDvO-ZAsPW10"
          alt=""
        />
        <Name>
          <span>sinsarul haq vm</span>
          <span>23/09/2022</span>
        </Name>
      </Author>
      <Container>
        <Content>
          <Title>This is One of the biggest movie in the shore</Title>
          <Image src="/images/blog.jpg" />
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ut
            earum error, natus ea ipsa ipsum in eum nesciunt porro? Totam
            dignissimos itaque beatae. Fugiat ea ad eveniet hic esse?Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Omnis ut earum error,
            natus ea ipsa ipsum in eum nesciunt porro? Totam dignissimos itaque
            beatae. Fugiat ea ad eveniet hic esse?Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Omnis ut earum error, natus ea ipsa
            ipsum in eum nesciunt porro? Totam dignissimos itaque beatae. Fugiat
            ea ad eveniet hic esse?Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Omnis ut earum error, natus ea ipsa ipsum in eum
            nesciunt porro? Totam dignissimos itaque beatae. Fugiat ea ad
            eveniet hic esse?LorLorem ipsum dolor sit amet, consectetur
            adipisicing elit. Omnis ut earum error, natus ea ipsa ipsum in eum
            nesciunt porro? Totam dignissimos itaque beatae. Fugiat ea ad
            eveniet hic esse?Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Omnis ut earum error, natus ea ipsa ipsum in eum nesciunt
            porro? Totam dignissimos itaque beatae. Fugiat ea ad eveniet hic
            esse?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            ut earum error, natus ea ipsa ipsum in eum nesciunt porro? Totam
            dignissimos itaque beatae. Fugiat ea ad eveniet hic esse?Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Omnis ut earum error,
            natus ea ipsa ipsum in eum nesciunt porro? Totam dignissimos itaque
            beatae. Fugiat ea ad eveniet hic esse?Lor Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Omnis ut earum error, natus ea
            ipsa ipsum in eum nesciunt porro? Totam dignissimos itaque beatae.
            Fugiat ea ad eveniet hic esse?Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Omnis ut earum error, natus ea ipsa
            ipsum in eum nesciunt porro? Totam dignissimos itaque beatae. Fugiat
            ea ad eveniet hic esse?Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Omnis ut earum error, natus ea ipsa ipsum in eum
            nesciunt porro? Totam dignissimos itaque beatae. Fugiat ea ad
            eveniet hic esse?Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Omnis ut earum error, natus ea ipsa ipsum in eum nesciunt
            porro? Totam dignissimos itaque beatae. Fugiat ea ad eveniet hic
            esse?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            ut earum error, natus ea ipsa ipsum in eum nesciunt porro? Totam
            dignissimos itaque beatae. Fugiat ea ad eveniet hic esse?
          </Body>
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
  object-fit: cover;
  border-radius: 5px;
  @media(max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;
const Body = styled.h4`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 1.5px;
`;
