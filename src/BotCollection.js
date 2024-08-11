


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SortBar from './SortBar';
import FilterBar from './FilterBar';

function BotCollection({ onEnlist }) {
  // state for all bots and displayed bots
  const [bots, setBots] = useState([]);
  const [displayedBots, setDisplayedBots] = useState([]);
  // state for active filter
  const [activeFilter, setActiveFilter] = useState(null);
// fetch data about bots when component mounts
  useEffect(() => {
    fetchBots();
  }, []);

  useEffect(() => {
    setDisplayedBots(bots);
  }, [bots]);

  const fetchBots = async () => {
    try {
      const response = await axios.get('http://localhost:8001/bots');
      setBots(response.data);
    } catch (error) {
      console.error('Error fetching bots:', error);
    }
  };
// function to handle sorting
  const handleSort = (key) => {
    const sorted = [...displayedBots].sort((a, b) => b[key] - a[key]);
    setDisplayedBots(sorted);
  };
// filtering
  const handleFilter = (botClass) => {
    setActiveFilter(botClass);
    if (botClass) {
      const filtered = bots.filter(bot => bot.bot_class === botClass);
      setDisplayedBots(filtered);
    } else {
      setDisplayedBots(bots);
    }
  };

  return (
    <div>
      <h2>Bot Collection</h2>
      <SortBar onSort={handleSort} />
      <FilterBar onFilter={handleFilter} />
      <table className="bot-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Class</th>
            <th>Health</th>
            <th>Damage</th>
            <th>Armor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedBots.map(bot => (
            <tr key={bot.id}>
              <td><img src={bot.avatar_url} alt={bot.name} width="50" /></td>
              <td>{bot.name}</td>
              <td>{bot.bot_class}</td>
              <td>{bot.health}</td>
              <td>{bot.damage}</td>
              <td>{bot.armor}</td>
              <td><button onClick={() => onEnlist(bot)}>Enlist</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BotCollection;

