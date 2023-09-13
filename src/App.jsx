import "./App.css"
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Navbar } from './components';

import {Shop, Cart} from './pages';

const App = () => {
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Shop />}/>
          <Route path="/Cart" element={<Cart />}/>
        </Routes>
    </Router>
 </div>
  )
}

export default App