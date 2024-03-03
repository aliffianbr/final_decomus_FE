import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default class Lifecycle extends React.Component {
  render(){
    return (
      <div>
        <h2>Hallo</h2>
      </div>
    )
  }
}

reportWebVitals();
