  import './cardPageProducts.css'
  import Button from './authComponents/Button'
  import {Link} from 'react-router-dom'

  import {useDispatch} from 'react-redux'
  import {addProduct} from '../store/reducers/basket'
  import { v4 as uuid } from 'uuid'


  function PageProductsCard ({url, tittle, description, price, weight}) {

    const dispatch = useDispatch()

    const handleAddProduct = (e) => {

      e.preventDefault()

          let item = {
              id: uuid (),
              tittle: tittle,
              url: url,
              price: price
          }
          console.log(item);

          dispatch(addProduct(item))
      }

      return (
        <Link to='/products' style={{ textDecoration: 'none' }}>
        <div className="PageProductsCard">
          <img className='PageProductsCard_preview' src={url} alt='' />

          <h2 className='PageProductsCard_header'>
          {tittle}
          </h2>

          <div className='PageProductsCard_description'>
          {description}
          </div>

          <div className='PageProductsCard_price'>
          {price}{weight}</div>

          <div onClick={handleAddProduct} className='PageProductsCard_add'>
          <Button
            name='В корзину'
            type='authButton'
            />

          </div>
      </div>
        </Link>

      )
  }

  export default PageProductsCard