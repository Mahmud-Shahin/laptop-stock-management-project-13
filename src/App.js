import {Route, Routes} from 'react-router-dom'
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';
import NotFound from './Pages/Share/Notfound/NotFound';
import StockItemDetails from './Pages/StockItemDetails/StockItemDetails';
import Register from './Pages/Register/Register';
import StockItems from './Pages/Home/StockItems/StockItems';

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/stockItems' element={<StockItems></StockItems>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/stockItem/:stockItemId' element={<StockItemDetails></StockItemDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>


     


    </div>
  );
}

export default App;
