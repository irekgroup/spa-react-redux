import './menuBox.css'

function MenuBox () {
    return (
        <div className='hamburger-menu'>
            <input type='checkbox' id='menu__toggle'/>
            <label className='menu__btn' for='menu__toggle' >
            <span></span>
            </label>

            <ul className='menu_box'>
                <li><a href='' className='menu__item'></a>Продукция</li>
                <li><a href='' className='menu__item'></a>Козина</li>
                <li><a href='' className='menu__item'></a>Авторизация</li>
            </ul>

        </div>
    )
}
export default MenuBox;