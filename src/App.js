import { useState } from 'react';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom'
import './css/reset.css'
import './css/header.css'
import './css/main.css'
import './css/footer.css'
import Header from './component/Header';
import Main from './component/Main';
import productData from './component/productData';
import Footer from './component/Footer';
import Login from './component/Login';
import Bag from './component/Bag';
import './css/login.css'
function App() {
  let [data, setData] = useState(productData);
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Main data={data}/>}></Route>
          <Route path='/Bag' element={<Bag data={data}/>}></Route>
          <Route path='/Jewellery' element={<div>Jewellery</div>}></Route>
          <Route path='/Perfume' element={<div>Perfume</div>}></Route>
          <Route path='/Skin' element={<div>skin</div>}></Route>
          <Route path='/Show' element={<div>show</div>}></Route>
          <Route path='*' element={<div>404</div>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
        </Routes>
      <Footer/>

    </div>
  );
}

export default App;
