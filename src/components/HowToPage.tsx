import { useState } from 'react'
import '../styles/howTo.css'
import MainPage from './MainPage';

const HowToPage = () => {
    const [ showMainPage, setShowMainPage ] = useState(false);

    if (showMainPage) {
        return <MainPage />
    }
    
    return (
     <article className='battleship-article-container'>
        <div className='battleship-header-container'>
            <div className='battleship-header'>How to Play</div>
            <div className='battleship-header-caption'>
                - Learn the Rules of Naval Strategy -
            </div>
        </div>
      <div className='battleship-description-container'>
        <hr/>
        <p>
          <strong>Battleship</strong> is a turn-based strategy game where careful
          planning, memory, and logic determine victory.
        </p>
        <p>
          Your goal is simple: <strong>sink all enemy ships before yours are
          destroyed</strong>.
        </p>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>🚢 Game Setup</div>
        <hr />
        <ul className='battleship-list-container'>
          <li>Each player is given their own grid-based board</li>
          <li>Ships vary in length and occupy multiple grid cells</li>
          <li>Ships must be placed:</li>
          <ul className='battleship-sub-list-container'>
            <li>Within the grid boundaries</li>
            <li>Without overlapping other ships</li>
          </ul>
          <li>Once all ships are placed, the battle begins</li>
        </ul>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>🎯 Objective</div>
        <hr />
        <p className='battleship-section-description'>
          Destroy all enemy ships by correctly guessing their locations.
        </p>
        <ul className='battleship-list-container'>
          <li>Each ship is sunk when all of its segments are hit</li>
          <li>The first player to sink every enemy ship wins</li>
        </ul>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>🔄 Turn-Based Gameplay</div>
        <hr />
        <ul className='battleship-list-container'>
          <li>Players take turns firing one shot per turn</li>
          <li>A shot is made by selecting a grid coordinate</li>
          <li>Each turn results in one of the following:</li>
          <ul className='battleship-sub-list-container'>
            <li><strong>Hit</strong> — A ship occupies that cell</li>
            <li><strong>Miss</strong> — The cell is empty</li>
            <li><strong>Sunk</strong> — The final segment of a ship is hit</li>
          </ul>
          <li>After a valid shot, the turn automatically switches</li>
        </ul>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>🧠 Strategy Tips</div>
        <hr />
        <ul className='battleship-list-container'>
          <li>Track previous hits and misses carefully</li>
          <li>Use ship length information to predict positions</li>
          <li>Target adjacent cells after scoring a hit</li>
          <li>Avoid firing randomly — logic wins games</li>
        </ul>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>📌 Game Rules Summary</div>
        <hr />
        <ul className='battleship-list-container'>
          <li>One shot per turn</li>
          <li>No overlapping ships</li>
          <li>No shots on the same cell twice</li>
          <li>Game ends immediately when all ships are sunk</li>
        </ul>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>🏁 Winning the Game</div>
        <hr />
        <p className='battleship-section-description'>
          Victory is achieved when every enemy ship has been fully destroyed.
        </p>
        <p className='battleship-section-description'>
          Battleship rewards patience, deduction, and thoughtful decision-making.
        </p>
        <hr />
      </div>
      <button className="how-to-btn btn" onClick={() => setShowMainPage(true)}>Home</button>
    </article>
    )
}

export default HowToPage;
