
function CardBasket ({url, tittle, price}) {

    return (
    <div className="basket__card">
        <img className='basket__preview' src={url} alt='' />

        <h3 className='basket__header_card'>{tittle}</h3>

        <div className='basket__price'>{price}</div>

        <button className='basket__add' id="check-boxEnt"><p className='textButton' for="check-boxEnt"> ╳ </p></button>
    </div>
    );
  }



  export default CardBasket;