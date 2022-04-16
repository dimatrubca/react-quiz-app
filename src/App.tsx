import React from 'react';
import logo from './logo.svg';
import './App.css';

import { RouterContainer } from "./containers/router-container";
import { AuthContextProvider } from './context';

function App() {
  return (
    <div className="App">
          <AuthContextProvider>
            <RouterContainer />
          </AuthContextProvider>
    </div>
  );
}

export default App;
