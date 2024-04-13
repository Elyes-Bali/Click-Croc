import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Market from './components/market/Market';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/market" element={<Market />} />
      
     </Routes>
    </div>
  );
}

export default App;
