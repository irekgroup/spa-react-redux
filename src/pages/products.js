import Card from '../components/card';
import {productsList} from '../components/productsList'
import '../components/card.css'

function Products () {
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
        {productsList.map (key => {
          return (
            <Card
            url={key.url}
            tittle={key.tittle}
            description={key.description}
            price={key.price}
            weight={key.weight}
            />
          )
        })}
      </div>
      </div>
    </main>
    )
}

export default Products;