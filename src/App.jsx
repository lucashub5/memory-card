import './App.css';
import Card from './Card';
import { randomCards } from './randomCards.js';
import PreLoad from './PreLoad';
import Lost from './Lost';
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState(() => randomCards());
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [preLoad, setPreLoad] = useState(false);
  const [lost, setLost] = useState(false);
  const [userData, setUserData] = useState(null);


  function handleClick(champ) {
    if (selectedCards.some(card => card === champ)) {
      setScore(0);
      setSelectedCards([]);
      setCards(randomCards());
      setLost(true);
    } else {
      if(score >= bestScore) {
        setBestScore(score + 1);
      }
      setScore(score + 1);
      setSelectedCards([...selectedCards, champ]);
      setCards(randomCards([...selectedCards, champ]));
    }
  }

  function handleStart(name, icon) {
    setUserData({ name, icon });
    setPreLoad(true);
  }

  function handleClickRestart() {
    console.log('ok');
    setLost(false);
  }

  return (
    <div className="app">
      <header>
        <h1>MEMORY CARD</h1>
        <div className='header-container'>
          {preLoad && (
            <section className='profile-info'>
              <div className='icon-profile'>
                <img src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/profileicon/${userData.icon}.png`} alt={`Icon`} />
              </div>
              <h2>Welcome {userData.name}!</h2>
            </section>
          )}
          <section className='score-bar'>
            <h2>SCORE: {score}</h2>
            <h2>BEST SCORE: {bestScore}</h2>
          </section>
        </div>
      </header>
      <main>
        {preLoad ? (
          <ul className='game-container'>
            {lost ? (
              <Lost 
              onClick={handleClickRestart}
              />
            ) : (
              cards.map((champ, index) => (
                <Card 
                  key={index}
                  champ={champ}
                  onClick={() => handleClick(champ)}
                />
              ))
            )}
          </ul>
        ) : (
          <PreLoad 
            onSubmit={handleStart}
          />
        )}
      </main>
      <footer>
        <p>Lucas Carovano - © 2024 Memory Card</p>
      </footer>
    </div>
  );
}

export default App;
