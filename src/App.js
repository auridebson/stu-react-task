import React from 'react'
import { BrowserRouter as Router, Switch,  Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

 
export default function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <ToastContainer position='top-center' />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddEdit} />
          <Route path="/update/:id" component={AddEdit} />
          <Route path="/view/:id" component={View} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </Router>
    
  );
}
