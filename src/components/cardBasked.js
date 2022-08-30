import '..src/components/cardBasket.css';

function CardBasket ({url, tittle, price}) {

    return (
    <div className="card">
        <img className='card__preview' src={url} alt='' />

        <h2 className='card__header'>
        {tittle}
        </h2>

        <div className='card_price'>
        {price}

        <div> <button className='add'><b className='textButton'> x </b></button></div>
        </div>
    </div>
    );
  }



  export default CardBasket;