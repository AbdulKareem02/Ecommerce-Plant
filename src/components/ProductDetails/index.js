import { useContext } from "react";
import "./index.css";
import { AppContext } from "../../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";

const ProductDetails = () => {
  const { plantsArray } = useContext(AppContext);
  const { id } = useParams();

  console.log("plants array", plantsArray);
  console.log("id", id);

  const filterProduct = plantsArray.filter((item) => item.id === parseInt(id));
  console.log("filterProduct", filterProduct);

  const { imageUlr, plantName, rating, actualPrise, offerPrise, ratingImage } =
    filterProduct[0];
  return (
    <div className="product-details-bg-container">
      <div className="thankyou-card">
        <h3>Thankyou for choosing us! </h3>
        <p>Here the product details</p>
        <div className="t-product-details-cont">
          <img src={imageUlr} className="product-image" />
          <div className="plant-details">
            <p>Product Name : {plantName}</p>
            <p>
              Product Name : <img src={ratingImage} className="rating-img" />
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
