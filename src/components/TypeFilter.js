import React from 'react';

const TypeFilter = ({ selectedTypes, onTypeChange }) => {
  const types = ['Kanji', 'Vocabulário'];

  const handleTypeChange = (e, type) => {
    onTypeChange(e, type);
  };

  return (
    <div className="mb-4 border p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Tipo</h2>
      <div className="flex justify-center space-x-4">
        {types.map((type) => (
          <div key={type}>
            <input
              type="checkbox"
              id={`type-${type}`}
              value={type}
              name="type"
              checked={selectedTypes.has(type)}
              onChange={(e) => handleTypeChange(e, type)}
            />
            <label htmlFor={`type-${type}`} className="ml-2">
              {type}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;
