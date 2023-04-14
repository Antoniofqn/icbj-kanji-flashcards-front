import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard';

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    try {
      const response = await axios.get('http://localhost:3001/flashcards');
      setFlashcards(response.data);
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  };

  const toggleFlip = () => {
    setFlip(!flip);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Flashcards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" onClick={toggleFlip}>
        {flashcards.map((flashcard) => (
          <Flashcard key={flashcard.id} flashcard={flashcard} flip={flip} />
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
