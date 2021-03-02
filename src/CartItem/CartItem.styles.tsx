import styled from "styled-components";
import Button from "@material-ui/core/Button";
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #00264d;
  padding-bottom: 30px;
   padding-top: 30px;
   padding-right: 20px;
  
  
  div {
    flex: 1;
  }
  .information .button {
    display: flex;
    justify-content: space-between;
  }
  img {
      max-width: 80px;
      object-fit: cover;
      margin-left 40px;
      
  }
   h3 {
    font-family: "Crimson Text", serif;
    font-size: 25px;
  }
  p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 15px;
  }
`;

export const StyledButton = styled(Button)`
  background-color: red;
  color: white;
`;
