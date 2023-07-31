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
      {/* 
        Flexbox: Layouting 1 Dimensi
        - Flex Direction: Row/Colum (By Default Ketika Display Flex, FD Adalah Row)
        - Justify Content: Start, Center, End
        - Align Items: Start, Center, End
      */}
      {/* <div className='flex justify-between px-10'>
        <div className='flex-1 border'>Logo</div>
        <div className='flex-1 flex justify-center gap-3 border'>
          <div>Menu1</div>
          <div>Menu2</div>
        </div>
        <div className='flex justify-end gap-3 flex-1 border'>
        <div>IconRight1</div>
        <div>IconRight2</div>
        </div>
      </div> */}
      <FetchPage />
    </>
  );
}

export default App;
