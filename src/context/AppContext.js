import { createContext, useState } from "react";

const dummyPlantsArray = [
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258737/e-commerce%20assignment/57a26487b27ba64aecadd2f4d7e83e50_lcyfb3.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 1,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258755/e-commerce%20assignment/e3d2febe446efa4b8f13ccd187d266f5_v1u0bp.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 2,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258757/e-commerce%20assignment/8150f68f85e80b39ed12017b8222dd1a_n99voa.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 3,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258737/e-commerce%20assignment/57a26487b27ba64aecadd2f4d7e83e50_lcyfb3.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 4,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258755/e-commerce%20assignment/e3d2febe446efa4b8f13ccd187d266f5_v1u0bp.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 5,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258757/e-commerce%20assignment/8150f68f85e80b39ed12017b8222dd1a_n99voa.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 6,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258737/e-commerce%20assignment/57a26487b27ba64aecadd2f4d7e83e50_lcyfb3.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 7,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258755/e-commerce%20assignment/e3d2febe446efa4b8f13ccd187d266f5_v1u0bp.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 8,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258757/e-commerce%20assignment/8150f68f85e80b39ed12017b8222dd1a_n99voa.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 9,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258737/e-commerce%20assignment/57a26487b27ba64aecadd2f4d7e83e50_lcyfb3.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 10,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258755/e-commerce%20assignment/e3d2febe446efa4b8f13ccd187d266f5_v1u0bp.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 11,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258757/e-commerce%20assignment/8150f68f85e80b39ed12017b8222dd1a_n99voa.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 12,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258737/e-commerce%20assignment/57a26487b27ba64aecadd2f4d7e83e50_lcyfb3.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 13,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258755/e-commerce%20assignment/e3d2febe446efa4b8f13ccd187d266f5_v1u0bp.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
  {
    id: 14,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258757/e-commerce%20assignment/8150f68f85e80b39ed12017b8222dd1a_n99voa.jpg",
    plantName: "Monsterra",
    aboutPlant: "Indoor Plant, Low maintenance",
    rating: "4.9",
    actualPrise: "359",
    offerPrise: "299",
    isLiked: false,
    quantity: 0,
    ratingImage:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729339222/e-commerce%20assignment/2d5f9291095d1210262f4a0d5f4c77e7_aodhh5.png",
  },
];

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [plantsArray, setPlantArrayData] = useState(dummyPlantsArray);
  const [cartItemsArray, setCartItems] = useState([]);
  return (
    <AppContext.Provider
      value={{
        cartItemsArray,
        setCartItems,
        plantsArray,
        setPlantArrayData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
