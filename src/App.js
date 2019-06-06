import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './component/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
