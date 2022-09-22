  import './components/App.css';
  import Basket from './pages/Basket'

  import Products from './pages/Products'

  import Authorization from './pages/Authorization'

  import Registration from './pages/Registration'

  import PageProducts from './pages/PageProducts'

  import {Route, Routes, useNavigate} from "react-router-dom";
  import {useEffect} from 'react'


  function App() {

    /* const navigate = useNavigate()

    useEffect(() => {

      let users = localStorage.getItem('users')
      if (!users) {
      navigate('/authorization')
      }
    }, []) */

    return (
      <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/authorization' element={<Authorization/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/card' element={<PageProducts/>}/>
  </Routes>
    );
  }

  export default App;

