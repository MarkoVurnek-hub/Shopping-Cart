import {
  Wrapper,
  StyledHeader,
  StyledButton,
  StyledLink
} from "./Header.styles";
import { useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Badge } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import gsap from "gsap";

import { Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
type Props = {
  numberOfItems: number;
  isOpen?: Dispatch<SetStateAction<boolean>>;
  showCartIcon: boolean;
  title: string;
};

const Header: React.FC<Props> = ({
  numberOfItems,
  isOpen,
  showCartIcon,
  title
}) => {
  const iconRef = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".title", {
      duration: 1.7,
      autoAlpha: 0,
      x: -500
    })
      .from(".MuiGrid-container", {
        duration: 1.7,
        autoAlpha: 0,
        y: -500
      })
      .from(iconRef.current, {
        duration: 1,
        autoAlpha: 0,
        x: 200
      });
  }, []);
  return (
    <Wrapper>
      <StyledHeader>
        <Toolbar>
          <div
            className="title"
            onClick={() => {
              const tl = gsap.timeline();
              tl.to(iconRef.current, {
                duration: 1,
                autoAlpha: 0,
                x: 200
              })
                .to(".MuiGrid-container", {
                  duration: 1,
                  autoAlpha: 0,
                  y: -500
                })
                .to(".title", {
                  duration: 1,
                  autoAlpha: 0,
                  x: -500
                })
                .eventCallback("onComplete", () => {
                  history.push("/");
                });
            }}
          >
            {title}
          </div>

          {showCartIcon && (
            <div className="shopIcon">
              <StyledButton
                ref={iconRef}
                onClick={() => {
                  if (isOpen) {
                    isOpen(true);
                  }
                }}
              >
                <Badge badgeContent={numberOfItems} color="error">
                  <AddShoppingCartIcon />
                </Badge>
              </StyledButton>
            </div>
          )}
        </Toolbar>
      </StyledHeader>
    </Wrapper>
  );
};

export default Header;
