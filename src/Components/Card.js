import React, { useState } from "react";

import Score from "./Score";
import Images from "./Images";

import "./Card.css";

const shuffleArray = (input) => {
  input.sort(() => Math.random() - 0.5);
};

const Card = () => {
  const [images, setImages] = useState(shuffleArray(Images));
  const [clickedImages, setClickedImages] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(score);

  // Increment score upon clicking card image
  const incrementScore = (image) => {
    setScore(score + 1);

    // Adds already clicked images to clickedImages array
    setClickedImages((current) => [...current, image]);

    // Reset score back to 0 upon winning game
    if (score >= 8) {
      reset();
    }

    // Update high score
    updateHighScore();

    // Randomly shuffles array of cards (images)
    setImages(shuffleArray(Images));

    // Checks if certain card has already been clicked
    if (clickedImages.includes(image)) {
      reset();
    }
  };

  // Updates the high score
  const updateHighScore = () => {
    if (score >= highScore) {
      setHighScore(score + 1);
    }
    if (score === 8) {
      setHighScore(8);
    }
  };

  // Resets scores and images array
  const reset = () => {
    // Reset score to 0
    setScore(0);

    // Reset clicked images
    setClickedImages([]);
  };

  return (
    <>
      <div>
        <Score score={score} highScore={highScore} />
      </div>
      <div className="container">
        <div className="card">
          {Images.map((img) => (
            <img
              key={img}
              src={img}
              alt={img}
              onClick={() => incrementScore(img)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
