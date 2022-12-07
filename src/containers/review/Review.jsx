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
    <div className="intro section__margin" id="reviews">
      <div className="intro-heading">
        <h1 className="gradient__text">What our lovely guests say about us</h1>
        <a href="#contact">
          <p>Leave us a review</p>
        </a>
      </div>

      <div className="intro-container">
        <ReviewCard
          name="Samantha"
          text="We had a great time at the cottage. It was very clean and comfortable. The location was perfect for us. We were able to walk to the city center and to the train station. The owner was very helpful and responsive. We would definitely stay here again.
          We had a great time at the cottage. It was very clean and comfortable. The location was perfect for us. We were able to walk to the city center and to the train station. The owner was very helpful and responsive. We would definitely stay here again.
          We had a great time at the cottage. It was very clean and comfortable. The location was perfect for us. We were able to walk to the city center and to the train station. The owner was very helpful and responsive. We would definitely stay here again."
          date="May 2020"
        />

        <ReviewCard
          name="Jhon Doe"
          text="We had a great time at the cottage. It was very clean and comfortable. The location was perfect for us. We were able to walk to the city center and to the train station. The owner was very helpful and responsive. We would definitely stay here again."
          date="June 2019"
        />

        <ReviewCard
          name="Jhon Doe"
          text="We had a great time at the cottage. It was very clean and comfortable. The location was perfect for us. We were able to walk to the city center and to the train station. The owner was very helpful and responsive. We would definitely stay here again."
          date="June 2019"
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
