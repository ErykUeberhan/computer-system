import React from 'react';
import './App.sass';
import Desktop from '../Desktop/Desktop';
import Taskbar from '../Taskbar/Taskbar';
import Toolbar from '../Toolbar/Toolbar';

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;
