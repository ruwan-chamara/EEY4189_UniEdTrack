import Signup from "./signup.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './Dashboard';
import ForgotPassword from './Forgot.jsx'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<Login />} />
          
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />} />
    
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App