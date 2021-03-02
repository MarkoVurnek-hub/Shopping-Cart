import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { Wrapper, StyledButton, StyledCarousel } from "./Modal.styles";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  images: any;
};

const Modal: React.FC<Props> = ({ images }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledButton
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Image gallery
      </StyledButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <StyledCarousel infiniteLoop emulateTouch swipeable dynamicHeight>
            {images.map((image: any, i: any) => {
              return (
                <div key={image.id} className="imageGallery">
                  <img key={image.id} src={image.url} alt={image.title} />
                </div>
              );
            })}
          </StyledCarousel>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Modal;
