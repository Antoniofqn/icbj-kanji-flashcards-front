import React from 'react';

const Flashcard = ({ flashcard, flip }) => {
  const { front, back, level, category } = flashcard;

  return (
    <div className="border border-gray-300 p-4 rounded shadow-lg cursor-pointer">
      <h3 className="text-xl font-semibold mb-2">{flip ? back : front}</h3>
    </div>
  );
};

export default Flashcard;
