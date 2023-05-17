import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Job from "./pages/Job";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/job' element={<Job/>}/>
    </Routes>
  )
}

export default App
