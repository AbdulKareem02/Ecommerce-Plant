import { useContext } from "react";
import "./index.css";
import { AppContext } from "../../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";

const ProductDetails = () => {
  const { plantsArray } = useContext(AppContext);
  const { id } = useParams();

  const filterProduct = plantsArray.filter((item) => item.id === parseInt(id));

  const { imageUlr, plantName, rating, actualPrise, offerPrise, ratingImage } =
    filterProduct[0];
  return (
    <div className="product-details-bg-container">
      <div className="thankyou-card">
        <h3>Thankyou for choosing us! </h3>
        <p>Here the product details</p>
        <div className="t-product-details-cont">
          <img src={imageUlr} className="product-image" alt="plant-img" />
          <div className="plant-details">
            <p>Product Name : {plantName}</p>
            <p>
              Product Name :
              <img src={ratingImage} className="rating-img" alt="product-img" />
              {rating}
            </p>
            <p className="">
              Actual Price : <MdCurrencyRupee />
              <span className="actual-price"> {actualPrise}</span>
            </p>
            <p>
              Discount Price : <MdCurrencyRupee /> {offerPrise}
            </p>
          </div>
        </div>
        <Link to="/">
          <button className="back-to-shopping">Back to shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
