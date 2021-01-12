import React from "react";
import Root from "../components/common/Root";
import Footer from "../components/common/Footer";
import Link from "next/link";

const About = () => (
  <Root>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4">Ofmax Homes</h2>
            <p className="mb-3">
              Whether you enjoy baking up a storm in the kitchen, tinkering around in the garden or
              you want to add a bit of personality to your bedroom or bathroom, Ofmax Homes has what
              you need. Ofmax Homes is Nigeria’s leading independent homewares retailer. We strive
              to offer you a wide choice of products at affordable prices, so that your home has a
              little more.
            </p>
            <p className="mb-3">
              This has been our objective since day one in 2016 when we opened our first store in
              Lagos, Nigeria, which is still operating today. From there we have grown rapidly.
              Today we have over 20,000 home products purchased from our store have imported quality
              products from the best global brands over the years.
            </p>
            <p className="mb-3">
              We at Ofmax Homes rate our value second to none. Our buyers search high and low to
              find the best products at the best prices. That is why we say, “believe us when we
              say, more savings every day”.
            </p>
            <p className="mb-3">
              One of our most important objectives here at Ofmax Homes is that you leave our store
              delighted. We make sure of this by putting more into everything we do. We offer More
              Choice; More Value and our colleagues give an extra bit more to make sure that you
              have an excellent experience. If you visit any of our stores you can be assured to
              receive a warm welcome along with enthusiastic help and advice. In every store there
              is a dedicated colleague in each department; so, whether you are looking for advice on
              which curtains will suit your room or you have recently decided to make everything
              from scratch and need advice on a pasta machine, we would be delighted to help.
            </p>
            <p className="mb-3">We really do hope you enjoy shopping with us!</p>
            <div className="about-cjs mt-3 d-flex flex-row">
              <Link href="/collection">
                <a className="px-4 py-3 font-color-white about-doc">Shop Now</a>
              </Link>
              <a className="px-4 py-3 about-dev" href="mailto:info@ofmaxhomes.com">
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/cjs-illustration.svg" alt="Commerce.js illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
