import logo from './logo.svg';
import './App.css';
import Card from './components/card.js';

function App() {
  return (
    <main className='main'>
      <div className='container'>
      <header>
      <h1 className='header'>НАША ПРОДУКЦИЯ</h1>
      <div className="basket">
        <p className='basket__desc'> 3 товара
на сумму 3 500 ₽
        </p>
        <img className='add'src="./img/basket.png" alt="" />
      </div>
      </header>
      <div className='menu'>

      <Card
      url={'img/1.png'}
      tittle={'Устрицы по рокфеллеровски'}
      description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры '}
      price={'2 700 ₽/ 500 г.'}
      urlIcon={'img/pluse_white.png'}
      />

      <Card
      url={'img/2.png'}
      tittle={'Свиные ребрышки на гриле с зеленью'}
      description={'Не следует, однако забывать, что реализация намеченных плановых, что укрепление '}
      price={'1 600 ₽/ 750 г.'}
      urlIcon={'img/pluse_white.png'}
      />

      <Card
      url={'img/3.png'}
      tittle={'Свиные ребрышки на гриле с зеленью'}
      description={'Не следует, однако забывать, что реализация намеченных плановых, что укрепление'}
      price={'2 700 ₽/ 500 г.'}
      urlIcon={'img/pluse_white.png'}
      />

      <Card
      url={'img/4.png'}
      tittle={'Устрицы по рокфеллеровски'}
      description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры '}
      price={'2 700 ₽/ 500 г.'}
      urlIcon={'img/pluse_white.png'}
      />

      <Card
      url={'img/8.png'}
      tittle={'Устрицы по рокфеллеровски'}
      description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры '}
      price={'2 700 ₽/ 500 г.'}
      urlIcon={'img/pluse_white.png'}
      />

      <Card
      url={'img/6.png'}
      tittle={'Свиные ребрышки на гриле с зеленью'}
      description={'Не следует, однако забывать, что реализация намеченных плановых, что укрепление'}
      price={'1 600 ₽/ 750 г.'}
      urlIcon={'img/pluse_white.png'}
      />

      <Card
      url={'img/7.png'}
      tittle={'Свиные ребрышки на гриле с зеленью'}
      description={'Не следует, однако забывать, что реализация намеченных плановых, что укрепление'}
      price={'2 700 ₽/ 500 г.'}
      urlIcon={'img/pluse_white.png'}
      />

      <Card
      url={'img/5.png'}
      tittle={'Устрицы по рокфеллеровски'}
      description={'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры '}
      price={'2 700 ₽/ 500 г.'}
      urlIcon={'img/pluse_white.png'}
      />

      </div>
      </div>
    </main>
  );
}

export default App;
