import LandingPage from "./Pages/LandingPage/LandingPage";
import NotFound from "./Pages/NotFound/NotFound";
import Profile from './Pages/Profile/Profile';
import ListProduct from "./Pages/ListProduct/ListProduct";
import Hooks from "./Pages/Hooks/Hooks";
import Todo from "./Pages/Todo/Todo";

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<ListProduct />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/todos' element={<Todo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
