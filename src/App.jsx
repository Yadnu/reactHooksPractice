import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <AppBar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

function AppBar(){
  const navigate = useNavigate();
  return(
    <div style = {{background: "black", color: "white"}}>
      <button onClick={()=>{navigate("/");}} >Landing Page</button>
      <button onClick={()=>{ navigate("/dashboard");}} >Dashboard</button>
      </div>
  );
}
export default App
