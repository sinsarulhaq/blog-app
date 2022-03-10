import React from "react";
import styled from "styled-components";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Post() {
  return (
    <Container>
        <Image src="/images/ban.jpg" />
        <SelectImage>
        <input
          type="text"
          className="text-type"
          placeholder="Title"
          autoFocus
        />
          <label htmlFor="file">
            <AddCircleOutlineOutlinedIcon sx={{ fontSize: 40 }} />  
            </label>
          <input
            type="file"
            id="file"
            className="file-type"
            style={{ display: "none" }}
          />
        </SelectImage>
        <Fields>
        <textarea placeholder="Share your Knowledge"></textarea>
        <button>POST</button>
      </Fields>
    </Container>
  );
}

export default Post;
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
height: 50%;
width: 100%;
object-fit: cover;
`

const Fields = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  textarea {
    width: 60%;
    min-height: 300px;
    resize: none;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    padding: 10px;
  }
  button {
    width: 10%;
    margin-top: 20px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    border: none;
    margin-bottom: 20px;
  }
`;

const SelectImage = styled.div`
width: 80%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
 .text-type {
    margin-top: 20px;
    outline: none;
    width: 53%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
    padding: 20px;
    border: none;
    font-size: 30px;
    border-radius: 5px;
    margin-right: 40px;
  }

`;
