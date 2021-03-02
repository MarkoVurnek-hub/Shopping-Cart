import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Carousel } from "react-responsive-carousel";
export const Wrapper = styled.div``;

export const StyledButton = styled(Button)`
  margin-top: 10px;
`;

export const StyledCarousel = styled(Carousel)`
  img {
    max-height: 345px;
    object-fit: cover;
  }
  .imageGallery {
    cursor: -webkit-grab;
    cursor: grab;
  }
  .imageGallery:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
`;
