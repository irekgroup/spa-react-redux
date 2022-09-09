import Card from '../components/card';
import {productsList} from '../components/productsList'
import '../components/card.css'
import MenuBox from '../components/menuBox/menuBox'


import {Link} from 'react-router-dom'

import React, {useState} from 'react'

function Products () {

  const [amount, setAmount] = useState (0)

    return (
        <main className='main'>
      <div className='container'>
      <MenuBox/>
      <header>
      <h1 className='header'>НАША ПРОДУКЦИЯ</h1>
      <div className="basket">
        <div className='basket__desc'>
        <span className='basket__desc-span'>
        3 товара
        </span>
        <br />
        <span>
        на сумму {amount} {setAmount} ₽
        </span>
        </div>
        <Link to='/basket'>
        <button className='add_basket'>
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0746 9.20417H16.1774L13.379 1.239C13.2096 0.756856 12.6815 0.503224 12.1992 0.672663C11.717 0.842057 11.4635 1.37027 11.6329 1.85246L14.2157 9.20413H6.78427L9.36711 1.85246C9.5365 1.37027 9.28296 0.842057 8.80077 0.672663C8.31871 0.503224 7.79041 0.756856 7.62102 1.239L4.82263 9.20417H0.925386C0.414318 9.20417 0 9.61844 0 10.1296C0 10.6406 0.414318 11.0549 0.925386 11.0549H1.17893L3.44649 19.3309C3.61625 19.9505 4.17934 20.38 4.82171 20.38H16.2413C16.8871 20.38 17.4522 19.946 17.6189 19.3221L19.8274 11.0549H20.0746C20.5857 11.0549 21 10.6406 21 10.1296C21 9.61849 20.5857 9.20417 20.0746 9.20417ZM7.46785 17.355C7.46785 17.866 7.05353 18.2803 6.54246 18.2803C6.03139 18.2803 5.61708 17.866 5.61708 17.355V12.6562C5.61708 12.1451 6.03139 11.7308 6.54246 11.7308C7.05353 11.7308 7.46785 12.1451 7.46785 12.6562V17.355ZM11.4254 17.355C11.4254 17.866 11.011 18.2803 10.5 18.2803C9.98891 18.2803 9.57459 17.866 9.57459 17.355V12.6562C9.57459 12.1451 9.98891 11.7308 10.5 11.7308C11.011 11.7308 11.4254 12.1451 11.4254 12.6562V17.355ZM15.3829 17.355C15.3829 17.866 14.9686 18.2803 14.4575 18.2803C13.9464 18.2803 13.5321 17.866 13.5321 17.355V12.6562C13.5321 12.1451 13.9464 11.7308 14.4575 11.7308C14.9686 11.7308 15.3829 12.1451 15.3829 12.6562V17.355Z" fill="white"/>
</svg>
      </button>
        </Link>

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