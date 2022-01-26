import React from 'react'
import './regularStyles.css'
import RenderPropsCounter from './components/RenderPropsCounter'
import ClickCouterTwo from './components/ClickCouterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import ComponentA from './components/ComponentA'
import { UserProvider } from './components/UserContext'

function App() {
  return (
    <div className="App">
      
      <UserProvider value="Julius">
        <ComponentA />
      </UserProvider>
      
    </div>
  );
}

export default App;
