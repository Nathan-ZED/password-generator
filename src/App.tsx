import React from 'react';
import './App.css';
import PassInput from "./Components/PassInput/PassInput";
import Generator from "./Components/Generator/Generator";
import { AppContextProvider } from './Context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <article className={"app-container"}>
            <h1>Password Generator</h1>
            <PassInput/>
            <Generator />
      </article>
    </AppContextProvider>
  );
}

export default App;
