import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SnackbarProvider } from "notistack";

import { RouterContainer } from "./containers/router-container";
import { AuthContextProvider } from './context';

function App() {
  return (
    <div className="App">
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <AuthContextProvider>
              <RouterContainer />
            </AuthContextProvider>
          </SnackbarProvider>

    </div>
  );
}

export default App;
