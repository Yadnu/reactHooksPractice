// import { lazy, Suspense } from 'react'
import './App.css'
import { useState } from 'react';
// import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
// const Dashboard = lazy(()=> import('./components/Dashboard'))
// const Landing = lazy(()=> import('./components/Landing'))

// function App() {
  
//   return (
//     <div>
//       <BrowserRouter>
//       <AppBar/>
//       <Routes>
//         <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>}></Route>
//         <Route path='/' element={<Suspense fallback={"Loading..."}><Landing/></Suspense>}></Route>
//       </Routes>
//     </BrowserRouter>
//     </div>
    
//   )
// }

// function AppBar(){
//   const navigate = useNavigate();
//   return(
//     <div style = {{background: "black", color: "white"}}>
//       <button onClick={()=>{navigate("/");}} >Landing Page</button>
//       <button onClick={()=>{ navigate("/dashboard");}} >Dashboard</button>
//       </div>
//   );
// }
function App(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <Count count={count}/>
      <Buttons />
    </div>
  );
}
function Count(){
  return <div>
    {Count}
  </div>

}
function Buttons(){
  return <div>
    <button onClick={()=>{}}>Increase</button>
    <button onClick={()=>{}}>Decrease</button>
  </div>
}
export default App
