    import '../components/PageProductsComponents/PageProducts.css'
    import MenuBox from "../components/menuBox/menuBox";
    import BasketContent from '../components/BasketContent/BasketContent'
    import GoBackButton from '../components/Buttons/GoBackButton/GoBackButton'
    import Button from '../components/authComponents/Button';
    import PageProductsCard from '../components/cardPageProducts'
    import {useSelector} from 'react-redux'
    /* import {productsList1} from '../components/productsList1' */


    function PageProducts () {

    const card = useSelector(state => state.card.card)

        return (
            <div className="PageProducts">
                <div className="PageProducts_container">
                <div className="PageProducts-header">
                    <div className="PageProducts_btn-back">
                    <GoBackButton/>
                    </div>

                    <div className="PageProducts_MenuBox">
                    <MenuBox/>
                    </div>

                    <div className="PageProducts_BasketContent">
                    <BasketContent/>
                    </div>

                    <div className="PageProducts_btn">
                    <Button name='Выйти' type='productButton'/>
                    </div>

                    </div>

                    <div className="PageProducts_content">

                    <PageProductsCard
                    url={card.url}
                    tittle={card.tittle}
                    description={card.description}
                    price={card.price}
                    weight={card.weight}
                    />
                    </div>
                </div>

                </div>

        )
    }

    export default PageProducts