import Signup from "./Signup.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './Dashboard';
import ForgotPassword from './Forgot.jsx'
import { Toaster } from 'react-hot-toast';



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
          
         <Toaster position="top-right" />

      </BrowserRouter>
    </div>
  )
}

export default App