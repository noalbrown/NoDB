import React from 'react';
import './App.css';
// my reset Css is in my App.css file
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
