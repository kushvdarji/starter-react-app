import React from "react";
import "./Extra.css";
function Footer() {
  return (
    <div style={{backgroundColor:"lightgray"}}>
    <div className="container" >
      <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
        <div className="container-fluid tm-container-small">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
              <h3 className="tm-text-primary mb-4 tm-footer-title">
                About GenderEquality
              </h3>
              <p>
              Spread the Awareness Around The  World! Help us build a global movement for change.
              Take The Initiative For The Global Change In The World.
              The Initiative Would Be Always By A Single Person But As The Awareness Would Be Given To All There Would Be Multiple Nos. Person Standing With You.
              <br></br>
              So Please Be Supportive And Help Us To Change The Mindset Of The People For The Genders In The World.
              <br/>
              So Please Follow And Subscribe Us. So That We Would Never Lose The Hope For These Global Cause.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
              <h3 className="tm-text-primary mb-4 tm-footer-title">
                Our Links
              </h3>
              <ul className="tm-footer-links pl-0">
                <li>
                  <a href="#" style={{color:"black"}}>Home</a>
                </li>
                <li>
                  <a href="#" style={{color:"black"}}>About Us</a>
                </li>
                <li>
                  <a href="#" style={{color:"black"}}>Contact</a>
                </li>
                <li>
                  <a href="#" style={{color:"black"}}>Donate</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
              <ul className="tm-social-links d-flex justify-content-end pl-0 mb-5 ">
                <li className="mb-2">
                  <a href="https://facebook.com">
                    <i className="fab fa-facebook "></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://pinterest.com">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
              <a href="#" className="tm-text-gray text-right d-block mb-2">
                Terms of Use
              </a>
              <a href="#" className="tm-text-gray text-right d-block">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
              Copyright @2023 SilverOak University. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Footer;
