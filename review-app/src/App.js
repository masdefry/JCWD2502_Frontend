import Home from './Pages/Home/Index';
import Profile from './Pages/Profile/Index';

import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Products/Index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} /> 
        <Route path='/products' element={<Products />} /> 
      </Routes>
    </>
  );
}

export default App;
