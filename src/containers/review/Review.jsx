import React, { useEffect } from "react";
import "./review.css";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="review section__margin" data-aos="fade-right">
      <div className="review-heading">
        <h1 className="gradient__text">What Our Guests Say</h1>
      </div>

      <div
        className="review-container"
        data-aos="fade-up"
        data-aos-offset="250"
      >
        <ReviewCard
          name="Samantha"
          text="We had a great time at the cottage. It was very clean and comfortable. The location was perfect for us. We were able to walk to the city center and to the train station. The owner was very helpful and responsive. We would definitely stay here again."
          date="May 2020"
        />

        <ReviewCard
          name="Jhon Doe"
          text="We had a great time at the cottage. It was very clean and comfortable. The location was perfect for us. We were able to walk to the city center and to the train station. The owner was very helpful and responsive. We would definitely stay here again."
          date="June 2019"
        />
      </div>
    </div>
  );
};

export default Review;
