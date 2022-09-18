    import '../components/card.css'
    import React, { useRef} from 'react'
    import {useDispatch} from 'react-redux'
    import {addProduct} from '../store/reducers/basket'
    import { v4 as uuid } from 'uuid'
    import { Link } from 'react-router-dom'


    function Card ({url, tittle, description, price, weight}) {

        const dispatch = useDispatch()

        const handleAddProduct = (e) => {

            e.preventDefault()

            let item = {
                id: uuid (),
                tittle: tittle,
                description: description,
                url: url,
                weight: weight,
                price: price
            }

            dispatch(addProduct(item))
        }

        const productAmount = useRef ()

        return (

        <Link to='/card' className="card" style={{ textDecoration: 'none' }}>
            <img className='card__preview' src={url} alt='' />

            <h2 className='card__header'>
            {tittle}
            </h2>

            <p className='card__description'>
            {description}
            </p>


            <div className='card_price'>
            {price} {weight}

            <div> <button ref={productAmount} onClick={handleAddProduct} className='add'><b
            className='textButton_products'> + </b></button></div>
            </div>
        </Link>



        );
    }

    export default Card;