import React, {useRef} from 'react';
import './card.css';




function Card ({url, tittle, description, price, weight}) {

 /*    React.useEffect (() => {
    let add = document.querySelector ('#addColorS')
    let addColor = document.querySelector ('#notColor')

    if (add.type == 'mouseover') {
        add.target.display = 'none';
        addColor.target.display = 'block';
    } else (add.type == 'mouseout') {
        add.target.display = 'block';
        addColor.target.display = 'none';
    }
    })
 */


    return (
    <div className="card">
        <img className='card__preview' src={url} alt='' />

        <h2 className='card__header'>
        {tittle}
        </h2>

        <p className='card__description'>
        {description}
        </p>

        <div className='card_price'>
        {price} {weight}

        <div> <button className='add'><b className='textButton'> + </b></button></div>
        </div>
    </div>
    );
  }



  export default Card;