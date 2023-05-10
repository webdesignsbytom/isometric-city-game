import React from 'react';
import { useState } from 'react';
// Data
import AchievementsDB from './../db/achievements.json';

export const GameContext = React.createContext();

const GameContextProvider = ({ children }) => {
  // player
  const [playerCharacter, setPlayerCharacter] = useState({
    username: '',
    // Goal - Main Currency
    totalGold: 100,
    // Gems - Buy special items
    gems: 50
  });

  return (
    <GameContext.Provider
      value={{
        playerCharacter,
        setPlayerCharacter,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
