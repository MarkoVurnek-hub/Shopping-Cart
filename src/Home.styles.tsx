import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
  }
  img {
    width: 100vw;
    height: 100vh;
    margin: 0;
    object-fit: cover;
    padding: 0;
  }
  .home {
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .description {
    color: #00264d;
    font-family: "Crimson Text", serif;
    font-size: 25px;
    margin-top: 50px;
    margin-left: 10px;
    z-index: 100;
    position: absolute;
  }
  .image-carousel:hover {
    cursor: pointer;
  }
`;
