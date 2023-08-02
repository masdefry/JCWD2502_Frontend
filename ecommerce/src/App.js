import logo from './logo.svg';
import './App.css';
import './Support/Stylesheet/Utils.css';

// Components
import Navbar from './Components/Navbar';
import Register from './Pages/Register/Index';
import FetchPage from './Pages/FetchPage/Index';

function App() {
  return (
    <>
      <Navbar />
      <Register />
      {/* 
        Register: 
        1. Make sure email belum pernah terdaftar
        2. Make sure minimum length password 6 character
      */}
    </>
  );
}

export default App;
