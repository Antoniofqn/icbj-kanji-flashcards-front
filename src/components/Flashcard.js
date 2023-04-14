import React, { useState } from 'react';

const Flashcard = ({ flashcard }) => {
  const { front, back, level, category } = flashcard;
  const [flip, setFlip] = useState(false);

  const toggleFlip = () => {
    setFlip(!flip);
  };

  return (
    <div
      className="border border-gray-300 p-4 rounded shadow-lg cursor-pointer w-48 h-48 flex flex-col justify-center items-center relative m-2"
      onClick={toggleFlip}
    >
      <div className="text-xs font-semibold text-gray-600 absolute top-2 left-4">{level}</div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{flip ? back : front}</h3>
      </div>
    </div>
  );
};

export default Flashcard;
