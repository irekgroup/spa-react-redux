import './menuBox.css'
import {useState} from "react";
import {Link} from "react-router-dom";

function MenuBox () {

    const [menuVisible, setMenuVisible] = useState(false)
    const toogleClick = () => setMenuVisible(!menuVisible)


    return (
        <div className='hamburger-menu'>
            <div>
                <input type='checkbox' id='menu__toggle' onClick={toogleClick}/>
                <label className='menu__btn' for='menu__toggle'>
                    <span></span>
                </label>
            </div>

            <ul className={menuVisible ? 'menu_box_visible' : 'menu_box_hided'}>
                <Link to="/products">Продукция</Link>
                <Link to="/">Козина</Link>
                <Link to="/authorization">Авторизация</Link>
            </ul>

        </div>
    );
}
export default MenuBox;