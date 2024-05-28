import './App.css'
import React from 'react'
import Menu from '../Menu/Menu'
import Dashboard from '../Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(true)
  const Toggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="container-fluid bg-primary min-vh-100">
      <div className='row'>
        {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
          <Menu />
        </div>}
        {toggle && <div className='col-4 col-md-2'></div>}
        <main>
          <Routes>
            <Route path="/" element={<Dashboard Toggle={Toggle} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
