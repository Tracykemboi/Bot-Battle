import React from 'react';

function FilterBar({ onFilter }) {

  const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  return (
    <div className="filter-bar">
      <label>Filter by class: </label>
      {botClasses.map(botClass => (
        // button for each bot class
        <button key={botClass} onClick={() => onFilter(botClass)}>
          {botClass}
        </button>
      ))}
      <button onClick={() => onFilter(null)}>Clear Filter</button>
    </div>
  );
}

export default FilterBar;