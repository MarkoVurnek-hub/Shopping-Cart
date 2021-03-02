import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
export const Wrapper = styled.aside`
  font-family: "Crimson Text", serif;
  font-size: 30px;
  width: 100%;
  padding: 10px;
  h2 {
    font-size: 30px;
  }
  background-color: #fdfcfa;
`;
export const HeaderCart = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Crimson Text", serif;
  font-size: 20px;
  width: 100%;
  height: 64px;
  color: white;
  background-color: #00264d;

  h2 {
    margin: 10px;
  }
`;
export const StyledCloseIcon = styled(CloseIcon)`
  padding: 20px 10px 20px 20px;
  cursor: pointer;
`;
