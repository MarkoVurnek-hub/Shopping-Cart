import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  border-radius: 10px;
  height: 100%;
  margin-top: 75px;

  button {
    background-color: #00264d;
    color: white;
  }
  button:hover {
    background-color: #003366;
  }
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 200px;
    object-fit: cover;
  }
  .details {
    padding: 0px 25px 25px 25px;
    height: 100%;
  }
  h3 {
    font-family: "Crimson Text", serif;
    font-size: 25px;
  }
  p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 15px;
  }
  .carousel-root {
    width: 100%;
    height: 380px;
  }
  .carousel {
    display: flex;
    object-fit: cover;
    height: 190px;
    justify-content: center;
    width: 100%;
  }
  .dot {
    background-color: #00264d;
  }
  .thumb selected {
    background-color: #00264d;
  }

  .price {
    float: right;
    font-size: 20px;
  }
  .mainImage {
    cursor: -webkit-grab;
    cursor: grab;
  }
  .mainImage:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
`;
export const Image = styled.div`
  display: flex;
  margin-top: 0px;

  align-items: center;
  justify-content: center;

  object-fit: contain;
`;
