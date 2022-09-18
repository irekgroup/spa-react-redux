    import { Link } from 'react-router-dom'
    import './emptyBasket.css'

    export {Link} from 'react-router-dom'

    function EmptyBasket () {
        return (
            <div className='EmptyBasket_container'>
                <h2>Ваша корзина пока пустая</h2>
                Добавьте комплект из <Link to='/products' className='EmptyBasket_link'>Меню</Link>
            </div>
        )
    }

    export default EmptyBasket