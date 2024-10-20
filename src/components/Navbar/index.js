import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./index.css";
import { AppContext } from "../../context/AppContext";

const sectionsArray = [
  { id: 1, section: "Home", path: "/", subLinks: [] },
  {
    id: 2,
    section: "Plants & Pots",
    path: "/",
    subLinks: [],
  },
  {
    id: 3,
    section: "Tools",
    path: "/",
    subLinks: [
      { id: 0, text: "Garden Tools" },
      { id: 1, text: "Power Tools" },
      { id: 2, text: "Hand Tools" },
      { id: 3, text: "Safety Gear" },
      { id: 4, text: "Tool Kits" },
    ],
  },
  {
    id: 4,
    section: "Our Services",
    path: "/",
    subLinks: [
      { id: 0, text: "Consultation" },
      { id: 1, text: "Delivery" },
      { id: 2, text: "Installation" },
    ],
  },
  { id: 5, section: "Blog", path: "/", subLinks: [] },
  { id: 6, section: "FAQs", path: "/", subLinks: [] },
];

const Navbar = () => {
  const { cartItemsArray } = useContext(AppContext);
  const [hoveredSectionId, setHoveredSectionId] = useState(null); // Track the hovered section

  const handleMouseEnter = (id) => {
    setHoveredSectionId(id); // Set the currently hovered section ID
  };

  const handleMouseLeave = () => {
    setHoveredSectionId(null); // Reset the hovered section ID
  };

  const renderSections = () => {
    return (
      <div className="sections-cont">
        {sectionsArray.map((item) => (
          <div key={item.id} style={{ position: "relative" }}>
            <button
              className="section-btn"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="section-link" to={item.path}>
                {item.section}
              </Link>
            </button>
            {hoveredSectionId === item.id && item.subLinks.length > 0 && (
              <div className="sub-link-cont">
                {item.subLinks.map((subLink) => (
                  <p key={subLink.id} style={{ margin: "5px 0" }}>
                    {subLink.text}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderUserProfileAndCart = () => {
    return (
      <div className="profile-cont">
        <Link to="/profile" className="profile-cont-link">
          <p className="profile-icon-cont">
            <FaUserAlt className="user-cart-icon" />
            <p>Profile</p>
          </p>
        </Link>
        <Link to="/cart" className="profile-cont-link">
          <div className="cart-icon-container">
            <div>
              <FaShoppingCart className="user-cart-icon" /> <p>Cart</p>
            </div>
            <div className="cart-count">
              <p>{cartItemsArray.length}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  const renderSectionsSmall = () => {
    return (
      <div className="sections-cont-sm">
        {sectionsArray.map((item) => (
          <div key={item.id} style={{ position: "relative" }}>
            <button
              className="section-btn"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="section-link" to={item.path}>
                {item.section}
              </Link>
            </button>
            {hoveredSectionId === item.id && item.subLinks.length > 0 && (
              <div className="sub-link-cont">
                {item.subLinks.map((subLink) => (
                  <p key={subLink.id} style={{ margin: "5px 0" }}>
                    {subLink.text}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="website-nav-bg-cont">
        <div className="website-logo-cont">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258362/e-commerce%20assignment/eefc66cd70960daab6449206c3540858_qa81cm.png"
            alt="website-logo"
            style={{ width: "50px", height: "50px" }}
          />
          <h1 className="website-name">Chaperone</h1>
        </div>
        {/* Rendering sections */}
        {renderSections()}
        {renderUserProfileAndCart()}
      </div>
      {renderSectionsSmall()}
    </>
  );
};

export default Navbar;
