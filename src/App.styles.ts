import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Paper, Drawer } from "@material-ui/core/";

export const Wrapper = styled.div`
  margin: 0;
  @media only screen and (max-device-width: 480px);
   {
    margin: 0;
    padding: 0;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 10px;
  color: white;
`;

export const StyledGrid = styled(Grid)`
  margin: 0;
  align-items: center;
`;

export const StyledPaper = styled(Paper)`
  background-color: #fdfcfa;

  @media only screen and (max-device-width: 480px);
   {
    margin: 0;
    margin-top: 50px;
  }
`;

export const StyledDrawer = styled(Drawer)``;
