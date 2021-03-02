import React, { useEffect, useRef } from "react";
import { Wrapper } from "./Home.styles";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

const Home = () => {
  const history = useHistory();
  const homeRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(homeRef.current, {
      duration: 1.7,
      autoAlpha: 0,
      y: -500
    });
  }, []);
  return (
    <Wrapper>
      <Header numberOfItems={0} showCartIcon={false} title={"Easy shop"} />
      <div className="home" ref={homeRef}>
        <div className="description">
          <h1>Jeftina roba za jeftine ljude</h1>
        </div>

        <div
          className="image-carousel"
          onClick={() => {
            history.push("/shop");
          }}
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            className="presentation-mode"
          >
            <div className="my-slide content">
              <img src="assets/slika1.jpeg" />
            </div>
            <div className="my-slide content">
              <img src="assets/slika2.jpeg" />
            </div>
            <div className="my-slide content">
              <img src="assets/slika3.jpeg" />
            </div>
            <div className="my-slide content">
              <img src="assets/slika4.jpeg" />
            </div>
          </Carousel>
        </div>
      </div>
    </Wrapper>
  );
};
export default Home;
