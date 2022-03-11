import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { postArticle } from "../../redux/actions";
import firebase from "firebase";
function Post() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`This file is not support, it is a ${typeof image}`);
    }
    setImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      image: image,
      title: title,
      body: body,
      user: user,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    dispatch(postArticle(payload));
    setImage("");
    setBody("");
    setTitle("");
    navigate("/home");
  };

  return (
    <Container>
      <Image src="/images/ban.jpg" />
      <SelectImage>
        <input
          required
          type="text"
          className="text-type"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <input
          required
          type="file"
          id="file"
          name="file"
          accept="image/gif, image/jpeg, image/png"
          className="file-type"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <label htmlFor="file">
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 40 }} />
        </label>
      </SelectImage>
      <Fields>
        {image && <img src={URL.createObjectURL(image)} />}
        <textarea
          placeholder="Share your Knowledge"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <button onClick={handleSubmit}>POST</button>
      </Fields>
    </Container>
  );
}

export default Post;
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 250px;
  }
`;

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
  img {
    width: 50%;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    textarea {
      width: 90%;
      min-height: 350px;
    }
    button {
      width: 30%;
    }
    img {
      width: 90%;
    }
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
  @media (max-width: 768px) {
    width: 100%;
    .text-type {
      width: 70%;
      margin-right: 20px;
    }
  }
`;
