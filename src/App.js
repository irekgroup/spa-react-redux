import './components/App.css';
import Basket from './pages/Basket'

import Products from './pages/Products'

import Authorization from './pages/Authorization'

import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
    <Route path='/' element={<Products/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/basket' element={<Basket/>}/>
    <Route path='/authorization' element={<Authorization/>}/>
</Routes>
  );
}

export default App;
