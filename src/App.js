import React from 'react'
import Home from "./pages/Home";
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

 
export default function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center' />
        <Switch>
          <Router exact path="/" component={Home} />
          <Router path="/add" component={AddEdit} />
          <Router path="/update/:id" component={AddEdit} />
          <Router path="/view/:id" component={View} />
          <Router path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}
