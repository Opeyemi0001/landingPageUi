import React, { useState, useEffect, useRef } from "react";
import { infoList } from "../assets/assets";

const AboutUs = () => {
  const [activeCategory, setActiveCategory] = useState("Market Prediction");
  const scrollContainerRef = useRef(null);

  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeItem = scrollContainerRef.current.querySelector(`[data-category="${activeCategory}"]`);
      if (activeItem) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const itemWidth = activeItem.offsetWidth;
        const itemLeft = activeItem.offsetLeft;

        scrollContainerRef.current.scrollTo({
          left: itemLeft - (containerWidth / 2) + (itemWidth / 2),
          behavior: "smooth",
        });
      }
    }
  }, [activeCategory]);

  const categories = [
    "Market Prediction",
    "Finance",
    "Analytics",
    "Content Generation",
    "Customer Support",
  ];

  return (
    <section className="w-full py-20 px-5 sm:px-10">
      {/* Centered text */}
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-normal text-3xl sm:text-5xl md:text-7xl">
          AI Model tailored for your business needs
        </h1>
        <p className="mt-6 sm:mt-9 text-sm sm:text-base text-[#828282]">
          Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs.
        </p>

        {/* Navigation Menu */}
        <ul className="border border-[#E4E4E7] rounded-xl text-[#AAAAAA] flex flex-wrap justify-center items-center text-xs sm:text-sm mt-10 p-0.5 gap-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl cursor-pointer transition-colors duration-300 ${activeCategory === category
                  ? "bg-[#03217F] text-white"
                  : "hover:bg-[#03217F] hover:text-white"
                }`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Display */}
      <div
        ref={scrollContainerRef}
        className="mt-16 sm:mt-20 overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div className="flex gap-6 sm:gap-10 px-5 sm:px-20 py-4">
          {infoList.map((info) => (
            <div
              key={info.id}
              data-category={info.category}
              className={`flex-shrink-0 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 bg-[#F6FAF3] rounded-lg p-4 sm:pt-4 transition-all duration-500 ${info.category === activeCategory
                  ? "scale-105 opacity-100 z-10 shadow-lg"
                  : "scale-95 opacity-60 hover:opacity-80"
                }`}
              style={{
                width: "90%",
                maxWidth: "700px", 
                transformOrigin: "center",
              }}
            >
              {/* Left Side: Text */}
              <div className="w-full sm:w-60 mx-4 sm:mx-10 text-center sm:text-left">
                <p className="text-sm sm:text-base text-[#828282]">{info.title}</p>
                <p className="text-lg sm:text-2xl text-[#22263F] font-bold mt-2">
                  {info.desc}
                </p>
                <button
                  className={`mt-4 bg-[#03217F] text-white px-4 py-2 rounded transition-all ${info.category === activeCategory ? "transform hover:scale-105" : ""
                    }`}
                >
                  {info.learnMore}
                </button>
              </div>

              {/* Right Side: Image */}
              <div className="overflow-hidden rounded-md w-full sm:w-auto">
                <img
                  src={info.img}
                  alt={info.title}
                  className={`object-cover w-full sm:max-w-sm max-h-48 sm:max-h-full transition-transform ${info.category === activeCategory ? "hover:scale-105" : ""
                    }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;