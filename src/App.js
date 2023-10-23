import React from 'react'
import Home from "./pages/Home";
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import View from './pages/View';

 
export default function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <AddEdit />
      <View />
    </div>
  );
}
