import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>OUR APP Comping Soon</h4>
        <p>OUR App for Android and IOS mobile phone(in 2024)</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>CropsCart.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; ALazzyDragoCoder</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/amanrichhariya12">Instagram</a>
        <a href="https://www.linkedin.com/in/aman-richhariya-72111822b/">Linkedin</a>
        <a href="https://www.facebook.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
