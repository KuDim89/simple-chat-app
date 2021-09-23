import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = {
  posts : [
    {id: 1, messages: 'Hi here', likesCount: 12},
    {id: 2, messages: 'Hi Hi', likesCount: 11}
  ],
  dialogs: [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'}
  ],
  messages: [
    {id: 1, message: 'Hi here'},
    {id: 2, message: 'Hi Hi'}
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <App data={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
