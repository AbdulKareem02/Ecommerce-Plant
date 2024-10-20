import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const nurseryPlantsArray = [
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258493/e-commerce%20assignment/ed50532940537d9d39d2626bb7a95167_if1nyt.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258478/e-commerce%20assignment/7eca96d5008198d2181b991de6f19034_klkd1l.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258462/e-commerce%20assignment/935a62fb31df9354ded9299559307ae6_k7fs17.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258452/e-commerce%20assignment/8375cef653c6b9ae388a7f2dda4ba454_pqdrvx.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258440/e-commerce%20assignment/362237370ea139219155cf9fca2448d3_pmqypx.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258493/e-commerce%20assignment/ed50532940537d9d39d2626bb7a95167_if1nyt.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258478/e-commerce%20assignment/7eca96d5008198d2181b991de6f19034_klkd1l.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258462/e-commerce%20assignment/935a62fb31df9354ded9299559307ae6_k7fs17.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258452/e-commerce%20assignment/8375cef653c6b9ae388a7f2dda4ba454_pqdrvx.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258440/e-commerce%20assignment/362237370ea139219155cf9fca2448d3_pmqypx.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258493/e-commerce%20assignment/ed50532940537d9d39d2626bb7a95167_if1nyt.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258478/e-commerce%20assignment/7eca96d5008198d2181b991de6f19034_klkd1l.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258462/e-commerce%20assignment/935a62fb31df9354ded9299559307ae6_k7fs17.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
  {
    id: 0,
    imageUlr:
      "https://res.cloudinary.com/dhfhuqtqi/image/upload/v1729258452/e-commerce%20assignment/8375cef653c6b9ae388a7f2dda4ba454_pqdrvx.png",
    label: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum",
  },
];

const NurseryPlants = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6, // Adjust the number of images shown
    slidesToScroll: 5,
    // Optional: enables centered view
    centerPadding: "0px", // Adjust padding to reduce space
  };

  return (
    <div className="category-scroller">
      <h2>Nursery</h2>
      <div className="slider-bg-container">
        <div className="slider-container">
          <Slider {...settings}>
            {nurseryPlantsArray.map((category) => (
              <div className="nursery-img-cont">
                <img
                  src={category.imageUlr}
                  className="nursery-img"
                  alt="nursery-img"
                />
                <p className="nursery-image-text">{category.label}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NurseryPlants;
