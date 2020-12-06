import React from 'react'
import './App.css'
import { Button } from './components/button/button'
import { SearchContainer } from './components/searchContainer/searchContainer'

function App() {
  return (
    <div className="App">
        <header className="App-header">
            {/* <Button label="click me please"/> */}
            <SearchContainer/>
        </header>
    </div>
  );
}

export default App;
