    import Card from '../components/card';
    import {productsList} from '../components/productsList'
    import '../components/Product.css'
    import MenuBox from "../components/menuBox/menuBox";
    import BasketContent from '../components/BasketContent/BasketContent'
    import Button from '../components/authComponents/Button'
    import { Link } from 'react-router-dom'


    function Products() {

        return (
            <main className='main'>
                <MenuBox/>

                <div className='container'>
                    <header>
                        <h1 className='header'>НАША ПРОДУКЦИЯ</h1>
                        <BasketContent/>
                        <Link to='/authorization'>
                        <div className="header-btn">
                        <Button
                        name='Выйти'
                        type='productButton'
                        />
                        </div>
                        </Link>

                    </header>

                    <div className='menu'>

                        {productsList.map(key => {
                            return (
                                <Card
                                    id={key.id}
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
    /* export const {total} = Products.setTotal */
    export default Products;
