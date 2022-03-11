import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginAPI } from "../../redux/actions";

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);

  useEffect(() => {
    if(user){
      navigate('/home')
    }
  }, [user, navigate])
  
  const handleSingIn = (e) => {
    e.preventDefault();
    dispatch(LoginAPI(user));
  };
  return (
    <Container>
      <Content>
        <h1>Welcome Back!</h1>
        <h4>
          Signin to get technology updations, blogs recommentaion, follow
          authors and topics you love, and interact with blogs
        </h4>
        <Button onClick={handleSingIn}>
          <img src="/images/google.svg" alt="" />
          Login with google
        </Button>
        <ImagesRow>
          <img src="/images/react.png" alt="" />
          <img src="/images/vue.png" alt="" />
          <img src="/images/node.png" alt="" />
          <img src="/images/mongo.png" alt="" />
          <img src="/images/aws.png" alt="" />
        </ImagesRow>
        <Privacy>
          Notice. PrivacyPolicies.com uses cookies to provide necessary website
          functionality, improve your experience and analyze our traffic. By
          using our website, you agree to <a href="/">our Privacy Policy </a>{" "}
          and our cookies usage.
        </Privacy>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    background: url("/images/blog.jpg") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    object-fit: fill;
    /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    z-index: -1;
  }
`;
const Content = styled.div`
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  max-width: 650px;
  width: 50%;
  h1 {
    font-size: 40px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    margin-bottom: 0px;
  }
  h4 {
    font-family: "Poppins", sans-serif;
    text-align: center;
  }
  @media (max-width: 768px) {
    h1 {
      width: 300px;
      text-align: center;
      font-size: 39px;
    }
    h4 {
      width: 350px;
      font-size: 15px;
      text-align: start;
      padding-left: 20px;
    }
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 20px;
  color: #fff;
  width: 250px;
  height: 50px;
  border-radius: 50px;
  transition-duration: 167ms;
  img {
    padding-right: 9px;
  }
  &:hover {
    color: black;
    background-color: white;
    transition-duration: 167ms;
  }
`;
const Privacy = styled.div`
  margin-top: 10px;
  font-size: 12px;
  @media (max-width: 768px) {
    width: 350px;
  }
`;
const ImagesRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  transition-duration: 167ms;
  img {
    width: 60px;
    height: 60px;
    &:hover {
      padding-top: 15px;
    }
  }
  @media (max-width: 768px) {
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
