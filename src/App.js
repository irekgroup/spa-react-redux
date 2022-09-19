  import './components/App.css';
  import Basket from './pages/Basket'

  import Products from './pages/Products'

  import Authorization from './pages/Authorization'

  import PageProducts from './pages/PageProducts'

  import {Route, Routes} from "react-router-dom";


  function App() {

    return (
      <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/authorization' element={<Authorization/>}/>
      <Route path='/card' element={<PageProducts/>}/>
  </Routes>
    );
  }

  export default App;

