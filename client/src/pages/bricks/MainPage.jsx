import React, { useState } from 'react';
import GameContainer from '../../components/GameContainer';

function MainPage() {
  const [startedGame, setStartedGame] = useState(false);

  const gameStart = () => {
    console.log('Starting game');
    setStartedGame(true);
  };

  return (
    <div className='grid'>
      {startedGame ? (
        <section className='grid h-screen p-4'>
          <GameContainer />
        </section>
      ) : (
        <section className='grid h-screen p-4 bg-stone-200'>
          <div className='grid items-center justify-center outline outline-2 outline-black py-8 px-6 rounded-xl bg-red-200'>
            <article className='grid text-center gap-4 outline outline-2 outline-black py-8 px-6 rounded-xl bg-red-400'>
              <h1>Welcome To IsoCity</h1>
              <h2>Click To Play Now</h2>
              <div>
                <button
                  className='outline outline-2 outline-black p-2 bg-slate-400 rounded'
                  onClick={gameStart}
                >
                  Start Game!
                </button>
              </div>
            </article>
          </div>
        </section>
      )}
    </div>
  );
}

export default MainPage;
