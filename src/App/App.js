import './App.css'
import React from 'react'
import Menu from '../Menu/Menu'
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <Menu />
        </div>
        <div className='col'>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
