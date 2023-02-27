import React from 'react';
import './App.css';
import Header from './Homepage/Header';
import Sidebar from './Homepage/Sidebar';
import Slide from './Homepage/Slide';
import About from './Homepage/About';
import Anime from './Anime/Anime.jsx';

function App() {
  return (
    <div className="App">
    
    <Header/>
    <Slide/>
    <About/>
    <Sidebar/>                                                                                                                                        

    </div>
  );
}

export default App;
