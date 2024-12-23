import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards"; // Assuming you have a Cards component to display each card

function Freebook() {
  // Example data with corrected image URLs
  const [list] = useState([
    { id: 1, name: "Atomic Habits", category: "Free", image: "https://static.independent.co.uk/2022/12/20/14/Amazons%20bestselling%20books%202022%20Indybest%20copy.jpg", price: 0 },
    { id: 2, name: "The Alchemist", category: "Paid", image: "https://assets-prd.ignimgs.com/2023/05/03/hp-deathly-hallows-1683157182524.jpeg", price: 100 },
    { id: 3, name: "It Ends with Us", category: "Free", image: "https://oxfordbookstore.com/product-details/11-rules-for-life-secrets-to-level-up-8904", price: 0 }, // Placeholder used
    { id: 4, name: "The Silent Patient", category: "Paid", image: "https://oxfordbookstore.com/product-details/welcome-to-paradise-9925", price: 200 }, // Placeholder used
    { id: 5, name: "Spare", category: "Free", image: "https://via.placeholder.com/300", price: 0 },
    { id: 6, name: "Lessons in Chemistry", category: "Paid", image: "https://via.placeholder.com/300", price: 150 },
    { id: 7, name: "Demon Copperhead", category: "Free", image: "https://via.placeholder.com/300", price: 0 },
    { id: 8, name: "The Miracle Morning", category: "Paid", image: "https://via.placeholder.com/300", price: 100 },
    { id: 9, name: "Rich Dad Poor Dad", category: "Free", image: "https://via.placeholder.com/300", price: 0 },
    { id: 10, name: "JAVA", category: "Paid", image: "https://via.placeholder.com/300", price: 200 },
    { id: 11, name: "C++", category: "Free", image: "https://via.placeholder.com/300", price: 0 },
    { id: 12, name: "Python", category: "Paid", image: "https://via.placeholder.com/300", price: 150 }
  ]);

  // Filter for free courses
  const filterData = list.filter((data) => data.category === "Free");

  // Slick slider settings
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="text-center mb-8">
        <h1 className="font-semibold text-2xl pb-2">Free Offered Courses</h1>
        <p className="text-gray-600">
          Browse our selection of free courses and enhance your skills!
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
