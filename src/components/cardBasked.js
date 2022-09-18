    import '../components/App.css'
    import {removeProductBasket} from '../store/reducers/basket'
    import {useDispatch} from 'react-redux'

    import {Link} from 'react-router-dom'
    import {readProduct} from '../store/reducers/card'

    function CardBasket ({url, tittle, description, price, weight, id}) {

        const dispatch = useDispatch();
        /* const items= useSelector(state=>state.basket.basket); */

      const handleRemoveBasket = (e) => {
        e.preventDefault()
        let item = {
          id: id,
          tittle: tittle,
          url: url,
          price: price,
          description: description,
          weight: weight
        }
        dispatch(removeProductBasket(item))
      }


      const handleReadProduct = () => {

        let item = {
            id: id,
            tittle: tittle,
            url: url,
            price: price,
            description: description,
            weight: weight
        }
        dispatch(readProduct(item))
    }

        return (
        <Link onClick={handleReadProduct} to='/card' className="basket__card" style={{ textDecoration: 'none' }}>
            <img className='basket__preview' src={url} alt='' />
            <h3 className='basket__header_card'>{tittle}</h3>
            <div>
                <span  className='basket__price'>{price} ₽</span>
            <button onClick={handleRemoveBasket}
            className='basket__add' id="check-boxEnt"><p className='textButton' for="check-boxEnt"> ╳ </p></button>
            </div>
        </Link>
        );
      }



      export default CardBasket;