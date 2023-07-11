import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function Board() {
  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

function Square() {
  const [newGame, setGame] = useState(true);
  const [value, setValue] = useState(true);

  function handleClick() {
    setValue(!value)
  }

  function handleOtherClick() {
    setGame(!newGame)
  }

  if (newGame !== true) {
    return (
      <button 
        className='square'
        onClick={handleClick}
      >
        {value ? 'X' : 'O'}
      </button>
    );
  }
  else {
    return (
      <button 
        className='square'
        onClick={handleOtherClick}
      >
      </button>
    );
  }
}

  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/