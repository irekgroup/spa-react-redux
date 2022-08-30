import '..Pages/card.css';

function Card ({url, tittle, description, price, weight}) {

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