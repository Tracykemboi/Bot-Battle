import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  // state to track the enlisted bots
  const [enlistedBots, setEnlistedBots] = useState([]);
// function to enlist a bot
  const enlistBot = (bot) => {
    if (!enlistedBots.find(enlistedBot => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };
// function to release a bot
  const releaseBot = (botId) => {
    // remove the bot from the array containing enlisted bots
    setEnlistedBots(enlistedBots.filter(bot => bot.id !== botId));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy bots={enlistedBots} onRelease={releaseBot} />
      <BotCollection onEnlist={enlistBot} />
    </div>
  );
}

export default App;


