import '../components/App.css'
import {removeProductBasket} from '../store/reducers/basket'
import {useDispatch} from 'react-redux'
import { v4 as uuid } from 'uuid'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function CardBasket ({url, tittle, price, id}) {

    const dispatch = useDispatch();
    /* const items= useSelector(state=>state.basket.basket); */


  const handleRemoveBasket = () => {
    let item = {
        id:id
    }
    dispatch(removeProductBasket(item))
  }


    return (
    <div className="basket__card">
      <Link to='/page' style={{ textDecoration: 'none' }}>
        <img className='basket__preview' src={url} alt='' /></Link>

        <Link to='/page' style={{ textDecoration: 'none' }}>
        <h3 className='basket__header_card'>{tittle}</h3></Link>

        <div>

            <span  className='basket__price'>{price} ₽</span>

        <button onClick={handleRemoveBasket}
        className='basket__add' id="check-boxEnt"><p className='textButton' for="check-boxEnt"> ╳ </p></button>
        </div>


    </div>
    );
  }



  export default CardBasket;