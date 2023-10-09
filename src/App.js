import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Signout from './Signout';
import Navigation  from './Navigation';
function App() {
  return (

    <Routes>
      <Route path='/' element={<Navigation />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signout' element={<Signout />} />
      
    </Routes>
  );
}

export default App;
