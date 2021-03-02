import styled from "styled-components";
import { AppBar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  flexgrow: 1;
  font-family: "Crimson Text", serif;
  font-size: 30px;
  .title {
    visibility: hidden;
    cursor: pointer;
  }
`;
export const StyledHeader = styled(AppBar)`
  && {
    background-color: #00264d;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledButton = styled(IconButton)`
  && {
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 10px;
    color: white;
  }
`;
export const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: white;
  }
`;
