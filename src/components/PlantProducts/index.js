import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { AppContext } from "../../context/AppContext";
import { GoHeart } from "react-icons/go";
import { IoHeartSharp } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";

const filterArray = [
  {
    id: 0,
    text: "Type of Plants",
    subLinks: [
      {
        id: 0,
        filter: "Lorem Ipsum (12)",
        filter: "Lorem Ipsum (22)",
        filter: "Lorem Ipsum (45)",
        filter: "Lorem Ipsum (9)",
        filter: "Lorem Ipsum (15)",
      },
    ],
  },
  { id: 1, text: "Price", subLinks: [] },
  { id: 2, text: "Nursery", subLinks: [] },
  { id: 3, text: "Ideal Plant Location", subLinks: [] },
  {
    id: 4,
    text: "Indoor/Outdoor",
    subLinks: [
      {
        id: 0,
        filter: "Lorem Ipsum (12)",
        filter: "Lorem Ipsum (22)",
        filter: "Lorem Ipsum (45)",
        filter: "Lorem Ipsum (9)",
        filter: "Lorem Ipsum (15)",
        filter: "Lorem Ipsum (35)",
        filter: "Lorem Ipsum (5)",
      },
    ],
  },
  { id: 5, text: "Maintenance", subLinks: [] },
  { id: 6, text: "Plant Size", subLinks: [] },
  { id: 7, text: "Water Schedule", subLinks: [] },
  { id: 8, text: "Color", subLinks: [] },
  { id: 9, text: "Seasonal", subLinks: [] },
  { id: 10, text: "Light Effect", subLinks: [] },
];

const PlantProducts = () => {
  const { plantsArray, setPlantArrayData, cartItemsArray, setCartItems } =
    useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // Calculate the starting and ending index for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the items for the current page
  const currentItems = plantsArray.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(plantsArray.length / itemsPerPage);

  //pagination buttons
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  //pagination buttons
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const pagination = () => {
    return (
      <div className="pagination-controls">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    );
  };

  const addItemsInCart = (id, imageUrl, plantName, price, quantity) => {
    setPlantArrayData((prevVal) =>
      prevVal.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    const cartData = {
      id: id,
      quantity: quantity + 1,
      imageUrl: imageUrl,
      plantName: plantName,
      price: price,
    };

    // checking atleast item all ready having in array
    const checkCartItemAlreadyIn = cartItemsArray.some(
      (item) => item.id === id
    );

    if (!checkCartItemAlreadyIn) {
      setCartItems((preVal) => [...preVal, cartData]);
    } else {
      return null;
    }
  };

  // toggle like btn
  const onLikeBtn = (id) => {
    setPlantArrayData((prevVal) =>
      prevVal.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item
      )
    );
  };

  //increase item quantity
  const onIncreaseBtn = (id) => {
    setPlantArrayData((prevVal) =>
      prevVal.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    setCartItems((prevVal) =>
      prevVal.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decrease item quantity
  const onDecreaseBtn = (id) => {
    // First, update the plant array's quantity
    setPlantArrayData((prevVal) =>
      prevVal.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );

    // Then, handle cart items update
    setCartItems(
      (prevVal) =>
        prevVal
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  const renderFilterProductsSm = () => {
    return (
      <select className="filter-select-sm">
        {filterArray.map((item) => (
          <option key={item.id} value={item.text}>
            {item.text}
          </option>
        ))}
      </select>
    );
  };

  //rendering plants array
  const renderPlantProducts = () => {
    return (
      <div className="products-bg-container">
        <div className="products-cont">
          <div className="sortby-cont">
            <div>
              <p className="products-count-text">300 products</p>
              <select className="select-sort">
                <option className="sort-by-text">Sort By</option>
                <hr />
                <option value="size">Size</option>
                <option value="popularity">Popularity</option>
                <option value="high-low">Prise : High - Low</option>
                <option value="low-high">Prise : Low - Heigh</option>
              </select>
            </div>

            {renderFilterProductsSm()}
          </div>
          <ul className="product-container">
            {currentItems.map((item) => {
              const checkItemHavingCart = cartItemsArray.filter(
                (q) => q.id === item.id && item.quantity > 0
              );
              return (
                <li className="product-list-item" key={item.id}>
                  <div className="plant-cont">
                    <div className="pant-and-like">
                      <img
                        src={item.imageUlr}
                        className="plant-images"
                        alt="pant-images"
                      />
                      {item.isLiked ? (
                        <IoHeartSharp
                          className="color-like-icon"
                          onClick={() => onLikeBtn(item.id)}
                        />
                      ) : (
                        <GoHeart
                          className="like-icon"
                          onClick={() => onLikeBtn(item.id)}
                        />
                      )}
                    </div>
                    <Link to={`/product/${item.id}`}>
                      <button className="view-product-btn">View Product</button>
                    </Link>
                  </div>
                  <div className="product-details-cont">
                    <h3>{item.plantName}</h3>
                    <p>{item.aboutPlant}</p>
                    <p>
                      <img
                        src={item.ratingImage}
                        alt="rating-img"
                        className="rating-img"
                      />
                      {item.rating}
                    </p>
                    <p>
                      <span className="actual-price">
                        <MdCurrencyRupee />
                        {item.actualPrise}
                      </span>
                      <span>
                        <MdCurrencyRupee />
                        {item.offerPrise}
                      </span>
                    </p>
                    <div className="add-cart-btn-cont">
                      {checkItemHavingCart.length > 0 ? (
                        <div className="inc-dec-btn-cont">
                          <button
                            className="inc-dec-btn"
                            onClick={() => onDecreaseBtn(item.id)}
                          >
                            -
                          </button>
                          <p className="quantity-text">{item.quantity}</p>
                          <button
                            className="inc-dec-btn"
                            onClick={() => onIncreaseBtn(item.id)}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="add-cart-btn"
                          onClick={() =>
                            addItemsInCart(
                              item.id,
                              item.imageUlr,
                              item.plantName,
                              item.offerPrise,
                              item.quantity
                            )
                          }
                        >
                          + Add Cart -
                        </button>
                      )}
                      <Link>
                        <button className="buy-product-btn">Buy on Rent</button>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {pagination()}
      </div>
    );
  };

  const renderFilterProducts = () => {
    return (
      <ul className="filter-topics-bg-cont">
        <p className="filter-text">
          Filter
          <span>CLEAR</span>
        </p>
        <hr />
        {filterArray.map((item) => (
          <li key={item.id}>
            <p className="filter-items">
              {item.text}
              <button className="plus-btn">+</button>
            </p>
            <hr />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="plant-products-bg-container">
      {renderFilterProducts()}
      {renderPlantProducts()}
    </div>
  );
};

export default PlantProducts;
