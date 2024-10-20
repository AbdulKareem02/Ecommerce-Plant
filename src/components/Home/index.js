import Footer from "../Footer";
import Navbar from "../Navbar";
import NurseryPlants from "../Nursery";
import PlantProducts from "../PlantProducts";
import { FaSearch } from "react-icons/fa";

import "./index.css";

const Home = () => {
  const renderSearchBar = () => {
    return (
      <div className="search-bg-container">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="search"
            placeholder="Search Plant"
            className="search-input"
          />
          <img
            className="search-leaf-image"
            alt="leaf-img"
            src="https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258406/e-commerce%20assignment/594c268f203b8704f61985100fae62d6_l9siws.png"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="home-bg-container">
      <div className="home-top-tag">
        <div className="tag-cont">
          <p className="shipping-text">Free Shipping on orders above 999/-</p>
          <p className="contact-no">Call us on: +91 98768051203 </p>
        </div>
      </div>

      {/*rendering home navbar here */}
      <div className="home-content-pages">
        <Navbar />
        {renderSearchBar()}
        <button className="plant-btn">Plants</button>
        <button className="pots-btn">Pots</button>
        <p className="home-info-text">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
        <NurseryPlants />
        <PlantProducts />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
