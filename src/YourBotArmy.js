

import React from 'react';

function YourBotArmy({ bots, onRelease }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {/* This displays the enlisted bots in form of a table */}
      <table className="bot-army-table">
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
          {bots.map(bot => (
            <tr key={bot.id}>
              <td><img src={bot.avatar_url} alt={bot.name} width="50" /></td>
              <td>{bot.name}</td>
              <td>{bot.bot_class}</td>
              <td>{bot.health}</td>
              <td>{bot.damage}</td>
              <td>{bot.armor}</td>
              {/* This button releases the bot  */}
              <td><button onClick={() => onRelease(bot.id)}>Release</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default YourBotArmy;