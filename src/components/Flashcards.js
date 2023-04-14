import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard';
import LevelFilter from './LevelFilter';
import TypeFilter from './TypeFilter';

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState(new Set());
  const [selectedTypes, setSelectedTypes] = useState(new Set());
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

  const handleLevelChange = (e, level) => {
    const newSelectedLevels = new Set(selectedLevels);
    if (e.target.checked) {
      newSelectedLevels.add(level);
    } else {
      newSelectedLevels.delete(level);
    }
    setSelectedLevels(newSelectedLevels);
  };

  const handleTypeChange = (e, type) => {
    const newSelectedTypes = new Set(selectedTypes);
    if (e.target.checked) {
      newSelectedTypes.add(type);
    } else {
      newSelectedTypes.delete(type);
    }
    setSelectedTypes(newSelectedTypes);
  };

  const filteredFlashcards = flashcards.filter((flashcard) => {
    const levelMatch = selectedLevels.size === 0 || selectedLevels.has(flashcard.level);
    const typeMatch = selectedTypes.size === 0 || selectedTypes.has(flashcard.type);
    return levelMatch && typeMatch;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Flashcards</h1>
      <LevelFilter
        selectedLevels={selectedLevels}
        onLevelChange={handleLevelChange}
      />
      <TypeFilter
        selectedTypes={selectedTypes}
        onTypeChange={handleTypeChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto px-4 place-items-center">
        {filteredFlashcards.map((flashcard) => (
          <Flashcard key={flashcard.id} flashcard={flashcard} flip={flip} />
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
