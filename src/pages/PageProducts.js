import '../components/PageProductsComponents/PageProducts.css'
import MenuBox from "../components/menuBox/menuBox";
import BasketContent from '../components/BasketContent/BasketContent'
import GoBackButton from '../components/Buttons/GoBackButton/GoBackButton'

function PageProducts () {
    return (
        <div className="PageProducts">
            <div><GoBackButton/></div>
            <div className="PageProducts_container">
            <MenuBox/>
                <div className="PageProducts_header">
                <BasketContent/>
                </div>
            </div>
        </div>
    )
}

export default PageProducts