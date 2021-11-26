import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GithubProvider from "./providers/github-provider";

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
