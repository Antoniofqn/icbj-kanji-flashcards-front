import React from 'react';

const LevelFilter = ({ selectedLevels, onLevelChange }) => {
  const levels = ['B3', 'B4', 'B5', 'B6', 'I1' ]; // Add more levels as needed

  const handleLevelChange = (e, level) => {
    onLevelChange(e, level);
  };

  return (
    <div className="mb-4 border p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Módulo</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {levels.map((level) => (
          <div key={level}>
            <input
              type="checkbox"
              id={`level-${level}`}
              value={level}
              checked={selectedLevels.has(level)}
              onChange={(e) => onLevelChange(e, level)}
            />
            <label htmlFor={`level-${level}`} className="ml-2">
              {level}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelFilter;
