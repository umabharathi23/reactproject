
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//<li>home</li>
//<li>About</li>
//<ul><li>home</li><li>home</li></ul>
// --------------------using react------------------------//
let li_1=React.createElement('li',{},'homessss')
let li_2=React.createElement('li',{},'About')
let ul=React.createElement('ul',{},[li_1,li_2])
//console.log(ul)
const root = ReactDOM.createRoot(document.getElementById('root'));
//---------using jsx------------//
let menu=<ul>
  <li>home</li>
  <li>abouts</li>
</ul>
root.render(ul);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



---------------------------------------------------
app.js code
import logo from './logo.svg';
import './App.css';

function App() {
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
