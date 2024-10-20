import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { AppContext } from "../../context/AppContext";
import Navbar from "../Navbar";
import { MdCurrencyRupee } from "react-icons/md";

const Cart = () => {
  const { cartItemsArray, setCartItems } = useContext(AppContext);
  const [isOrderPlaced, setOrderPlaced] = useState(false);

  const onClickOrder = () => {
    setOrderPlaced((prevVal) => !prevVal);
    setCartItems([]);
  };

  const totalAmount = cartItemsArray.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  return (
    <div className="cart-bg-container">
      <Navbar />
      {isOrderPlaced ? (
        <div className="order-placed-cont">
          <h4>Your Cart</h4>
          <hr />
          <h3> Congratulations Order Placed!</h3>
          <img
            className="no-product-img"
            alt="no-products-img"
            src="https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258801/e-commerce%20assignment/14d6293522911d4a2548b9b1cf65a33a_egsgot.png"
          />
          <img />
          <p>
            Thank you for choosing Chaperone services. We will soon get in touch
            with you!
          </p>
          <Link to="/" className="continue-shopping-btn">
            <button className="continue-shopping-btn">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div className="cart-main-container">
          {cartItemsArray.length > 0 ? (
            <>
              <ul className="cart-container">
                <h3>Your Cart Items</h3>
                <div className="cart-header">
                  <p>Plant Image</p>
                  <p>Plant Name</p>
                  <p>Quantity</p>
                  <p>Discount Price</p>
                </div>
                {cartItemsArray.map((item) => (
                  <>
                    <li className="cart-list-item" key={item.id}>
                      <img
                        src={item.imageUrl}
                        className="cart-img"
                        alt="cart-image"
                      />
                      <p>{item.plantName}</p>
                      <p>{item.quantity}</p>
                      <p>
                        <MdCurrencyRupee />
                        {item.price}
                      </p>
                    </li>
                    <hr />
                  </>
                ))}
              </ul>
              <div className="amount-order-now-cont">
                <h4 className="total-amount-text">
                  Total Amount : <MdCurrencyRupee />
                  {totalAmount}
                </h4>
                <button className="order-now-btn" onClick={onClickOrder}>
                  Make Order Now!
                </button>
              </div>
            </>
          ) : (
            <div className="no-products-container">
              <img
                className="no-product-img"
                alt="no-products-img"
                src="https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258801/e-commerce%20assignment/14d6293522911d4a2548b9b1cf65a33a_egsgot.png"
              />
              <h3>No Cart Items To Show</h3>
              <Link to="/">
                <button className="shop-now-btn">Shop Now!</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
