import React, { useRef} from 'react'
import {useDispatch} from 'react-redux'
import {addProduct} from '../store/reducers/basket'

function Card ({url, tittle, description, price, weight}) {

    const dispatch = useDispatch

    let item = {
        tittle: tittle,
        url: url,
        price: price
    }

    const handleAddProduct = () => {
        dispatch(addProduct(item))
    }

    const productAmount = useRef ()

    return (
    <div className="card">
        <img className='card__preview' src={url} alt='' />

        <h2 className='card__header'>
        {tittle}
        </h2>

        <p className='card__description'>
        {description}
        </p>

        <div className='card_price' ref={productAmount}>
        {price} {weight}

        <div> <button onClick={handleAddProduct} className='add'><b
        className='textButton_products'> + </b></button></div>
        </div>
    </div>

    );
  }

  export default Card;