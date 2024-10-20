import "./index.css";
import { CgInstagram } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer-bg-container">
      <div className="services-cont">
        <div className="s-cont">
          <h4>SUBSCRIBE TO OUR NEWSLETTER </h4>
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necesbus enim
          </p>
          <input
            type="text"
            placeholder="Enter your email address"
            className="email-input"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className="s-cont">
          <h4>About us </h4>
          <p>Our Story</p>
          <p>Blogs</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <p>Help & Support</p>
        </div>
        <div className="s-cont">
          <h4>OUR SERVICES </h4>
          <p>Book Maali</p>
          <p>Plant Day Care</p>
          <p>Rent Plants</p>
          <p>Plants & Pots</p>
          <p>Gardening Tools</p>
        </div>
        <div className="s-cont">
          <h4>USEFUL LINKS </h4>
          <p>My Account</p>
          <p>Orders & Returns</p>
          <p>Track Order</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Return, Refund & Replacement Policy</p>
        </div>
        <div className="s-cont">
          <h4>GET IN TOUCH </h4>
          <p>
            Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
            Gurgaon, Haryana, India 122003
          </p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>
      <div className="chaperone-cont">
        <h4>CHAPERONE</h4>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
      </div>
      <div className="follow-us-cont">
        <h4>FOLLOWS US</h4>
        <div className="">
          <CgInstagram className="follow-us-icon" />
          <FaFacebook className="follow-us-icon" />
          <BsFillThreadsFill className="follow-us-icon" />
          <FaYoutube className="follow-us-icon" />
          <IoLogoLinkedin className="follow-us-icon" />
        </div>
      </div>
      <hr />
      <div className="copy-right-cont">
        <p>© 2023, chaperone.com All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
