import React, { Component } from "react";
import Swiper, { EffectFade, Autoplay } from "react-id-swiper";
import Link from "next/link";

const params = {
  modules: [EffectFade, Autoplay],
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
};
const images = [
  "/images/home-1.JPG",
  "/images/home-2.JPG",
  "/images/home-3.JPG",
  "/images/home-4.JPG",
  "/images/home-5.JPG",
  "/images/home-6.JPG",
  "/images/home-7.JPG",
  "/images/home-8.JPG",
  "/images/home-9.JPG",
  "/images/home-10.JPG",
];

export default class HeroSection extends Component {
  render() {
    return (
      <div className="hero-section position-relative">
        <Swiper {...params}>
          {images.map((image, index) => (
            <div key={image}>
              <div
                className="hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5"
                style={{
                  backgroundImage: `linear-gradient(rgb(29 70 113 / 60%), rgba(195, 55, 100, 0.3)), url("${image}")`,
                }}
              >
                <p className="font-size-display5 font-family-secondary mb-4 text-center hero-header">
                  The home you've always wanted
                </p>
                <p className="text-transform-uppercase font-size-title mb-5 hero-subheader">
                  A range of products for you
                </p>
                <Link href="/collection">
                  <a className="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn">
                    Shop now
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </Swiper>
      </div>
    );
  }
}
