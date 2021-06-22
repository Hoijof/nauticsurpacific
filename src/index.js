import React from 'react';
import ReactDOM from 'react-dom';

import './fonts.css';
import './index.css';

import Skeleton from './src/components/skeleton';
import Background from './src/components/background';
import Logo from './src/components/logo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Skeleton>
      <Background>
        <Logo />
      </Background>
    </Skeleton>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
