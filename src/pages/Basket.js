import CardBasket from '../components/cardBasked';
import '../components/Basket.css';
import MenuBox from '../components/menuBox/menuBox'
import EmptyBasket from '../components/emptyBasket'
import GoBackButton from '../components/Buttons/GoBackButton/GoBackButton'
import {useSelector} from 'react-redux'
import Button from '../components/authComponents/Button'


function Basket () {

  const basket = useSelector(state => state.basket.basket)
  const totalProduct = useSelector((state) => state.basket.pricesProducts)
    return (
        <div className='basket_components'>
        <div className='basket__container'>
        <MenuBox/>
        <header>
          <GoBackButton/>
          <h1 className='basket__header'>
          КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ
          </h1>
        </header>
        {!basket.length && <EmptyBasket/>}
        <div className='basket__favorites'>
        {basket.map (key => {
              return (
                <CardBasket
                id={key.id}
                url={key.url}
                tittle={key.tittle}
                price={key.price}
                />
              )
            })}
        </div>
        <div className="basket__footer">
          <div className="basket__summaryText">ЗАКАЗ НА СУММУ:</div>
          <p className="basket__summary">{totalProduct} ₽</p>
          <div className="basket__button">
          <Button
          name={'Оформить заказ'}
          />
          </div>

        </div>
        </div>
        <div
            style={{
              background: '#D58C51',
              height: '1px',
              position: 'sticky',
              bottom: '89px',
            }}
          />
      </div>
    )
}

export default Basket;