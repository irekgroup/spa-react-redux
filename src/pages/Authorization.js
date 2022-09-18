    import '../components/authComponents/authorization.css'
    import InputAuth from '../components/authComponents/inputAuth'
    import Checkbox from '../components/authComponents/authCheckbox'
    import Button from '../components/authComponents/Button'
    import MenuBox from '../components/menuBox/menuBox'
    import RegBtn from '../components/authComponents/RegBtn'
    import React, {useRef} from "react";

    function Authorization () {

        const ClickReg = () => {
            formRegRef.addEventListener('click', () => {
                formRegRef.style.display = 'none'
            })
        }

        const formRegRef = useRef()

        /* ClickReg.addEventListener()('click', (e) => {
            formRegRef.style.display = 'none'
        }) */

        /* formRegRef.ClickReg('click', (e) => {
            formRegRef.style.display = 'none'
        }) */

        /* const ClickReg = (e) => {
            formRegRef.style.display = 'none'
        } */

        return (

                <main className="authorization">
                    <MenuBox/>
                    <div className="authorization-container">
                            <div className="auth-form" ref={formRegRef}>
                                <form className="authorization-form">
                                    <div onClick={ClickReg} className="registration-btn">
                                        <RegBtn name={'Зарегистрироваться'}/>
                                    </div>
                                <h1 className="authorization-header">ВХОД</h1>
                                    <div className=''>
                                    <InputAuth name = {'E-mail'}/>
                                    <InputAuth name = {'Пароль'}/>
                                    </div>
                                <div className="authorization-input_checkbox">
                                <Checkbox/>
                                </div>
                                <Button
                                name = {'Войти'}
                                />
                                </form>
                            </div>

                            <div className="reg-form" ref={formRegRef}>
                                <form className="authorization-form">
                                    <div onClick={ClickReg} className="registration-btn">
                                    <RegBtn name={'Авторизоваться'}/>
                                    </div>
                                <h1 className="authorization-header">РЕГИСТРАЦИЯ</h1>
                                <div className=''>
                                <InputAuth name = {'Логин'}/>
                                <InputAuth name = {'Пароль'}/>
                                </div>
                                <div className="authorization-input_checkbox">
                                <Checkbox/>
                                </div>
                                <Button
                                name = {'Зарегистрироваться'}
                                />
                                </form>
                            </div>
                    </div>
                </main>
        )
    }

    export default Authorization;