// App.js
import React from 'react';
import { DarkModeProvider } from './CounterAppProvider';
import {CounterApp} from './CounterApp'

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <CounterApp />  {/* {"Act as a Children"} */}
      </div>
    </DarkModeProvider>
  );
}

export default App;
