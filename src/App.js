import './components/cardBasked.css';
import './pages/App.css';
import {productsBasket} from '../src/components/basketProducts.js'

function App() {

  return (
  <div className='basket'>
    <div className='basket__container'>
    <header>
      <h1 className='basket__header'>
      КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ
      </h1>
    </header>
    <div className="basket__footer">
      <div className="basket__summaryText">ЗАКАЗ НА СУММУ:</div>
      <p className="basket__summary">6 220 ₽</p>
      <button className="basket__button">Оформить заказ</button>
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
  );
}

export default App;
