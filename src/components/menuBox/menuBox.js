import './menuBox.css'
import {useState, useRef} from 'react'

import {Link} from 'react-router-dom'

function MenuBox () {


    let [menuVisible, setMenuVisible] = useState(true)
    const toggleClick = () => setMenuVisible (!menuVisible)

    const burgerMenu = useRef ()
    if (burgerMenu === false) {
        menuVisible = true
        // Тут логика открытия меню
    }

    return (

        <div className='hamburger-menu'>
            <input type='checkbox' id='menu__toggle' ref={burgerMenu} onClick={toggleClick}/>
            <label className='menu__btn' for='menu__toggle' >
            <span></span>
            </label>

            <ul className={menuVisible ? 'menu_box_visible' : 'menu_box_hided'}>
                <li><Link to='/products' className='menu__item'> Продукция</Link></li>
                <li><Link to='/basket' className='menu__item'> Корзина</Link></li>
                <li><Link to='/authorization' className='menu__item'> Авторизация</Link></li>
            </ul>

        </div>
    );
}
export default MenuBox;