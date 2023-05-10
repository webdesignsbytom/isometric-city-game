import React from 'react';

function WelcomePage() {
  const gameStart = () => {
    console.log('Starting game');
  };

  return (
    <div  className='grid h-screen justify-center items-center'>
      <section className='outline outline-2 outline-black py-8 px-6 rounded-xl bg-stone-200'>
        <article className='grid items-center justify-center text-center gap-4'>
          <h1>Welcome To IsoCity</h1>
          <h2>Click To Play Now</h2>
          <div>
            <button className='outline outline-2 outline-black p-2 bg-slate-400 rounded' onClick={gameStart}>Start Game!</button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default WelcomePage;
