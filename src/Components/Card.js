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
  const [highScore, setHighScore] = useState(0);

  const incrementScore = (image) => {
    setScore(score + 1);

    // Update clicked images
    setClickedImages((current) => [...current, image]);

    if (score >= 10) {
      reset();
    }

    setHighScore(score + 1);
    if (score > highScore) {
      setHighScore(score);
    }
    if (highScore >= 10) {
      setHighScore(10);
    }

    setImages(shuffleArray(Images));

    if (clickedImages.includes(image)) {
      reset();
    }
  };

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
    </>
  );
};

export default Card;
