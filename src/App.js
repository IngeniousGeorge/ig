import React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'Autodidact Manifesto',
    url: 'https://ingeniousgeorge.github.io/ig/autodidact-manifesto',
    author: 'Ingenious George',
    objectID: 0
  },
  {
    title: 'The Jungle',
    url: 'https://ingeniousgeorge.github.io/ig/the-jungle',
    author: 'Ingenious George',
    objectID: 1
  }
];

function App() {
  return (
    <div className="App">
      {list.map(item => 
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>  
          </span>
          <span>{item.author}</span>
        </div>
      )}
    </div>
  );
}

export default App;






{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Welcome to the Ingenious George Blog. Have fun!
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}
