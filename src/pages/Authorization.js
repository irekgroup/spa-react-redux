    import '../components/authComponents/authorization.css'
    import InputAuth from '../components/authComponents/inputAuth'
    import Checkbox from '../components/authComponents/authCheckbox'
    import Button from '../components/authComponents/Button'
    import MenuBox from '../components/menuBox/menuBox'
    import RegBtn from '../components/authComponents/RegBtn'
    import React, {useRef} from "react";
    import { Link } from 'react-router-dom'
    import Error from '../components/authComponents/error'

    function Authorization () {

        let mail, password, login = useRef()

        //проверка на пустую строку и выведение errorimage.png
        function empty (mail, password, login) {
            if (mail.value === '') {

            }
        }

        return (

                <main className="authorization">
                    <MenuBox/>
                    <div className="authorization-container">
                            <div className="auth-form" /* ref={formRegRef} */>
                                <form className="authorization-form">
                                    <div /* onClick={ClickReg} */ className="registration-btn">
                                        <RegBtn name={'Зарегистрироваться'}/>
                                    </div>
                                <h1 className="authorization-header">ВХОД</h1>
                                    <div className=''>
                                    <InputAuth
                                    ref={mail}
                                    name = {'E-mail'}
                                    />
                                    <div className="error_class">
                                        <Error
                                        name= 'Поле не должно быть пустым'
                                        type= 'error'
                                        />
                                    </div>
                                    <InputAuth
                                    ref={password}
                                    name = {'Пароль'}
                                    />
                                    <div className="error_class">
                                        <Error
                                        name= 'Поле не должно быть пустым'
                                        type= 'error'
                                        />
                                    </div>
                                    </div>
                                <div className="authorization-input_checkbox">
                                <Checkbox/>
                                </div>
                                <Button
                                name = {'Войти'}
                                />
                                <div className="error_class-auth">
                                        <Error
                                        name= 'Логин или пароль неверен'
                                        type= 'error'
                                        />
                                    </div>
                                </form>
                            </div>

                            <div className="reg-form" /* ref={formRegRef} */>
                                <form className="authorization-form">
                                    <div /* onClick={ClickReg} */ className="registration-btn">
                                    <RegBtn name={'Авторизоваться'}/>
                                    </div>
                                <h1 className="authorization-header">РЕГИСТРАЦИЯ</h1>
                                <div className=''>
                                <InputAuth
                                ref={login}
                                name = {'Логин'}
                                />
                                <div className="error_class">
                                        <Error
                                        name= 'Поле не должно быть пустым'
                                        type= 'error'
                                        />
                                    </div>
                                    <div className="login_class">
                                        <Error
                                        name= 'Логин должен содержать не менее 4-х символов'
                                        type= 'error'
                                        />
                                    </div>
                                <InputAuth
                                ref={password}
                                name = {'Пароль'}
                                />
                                <div className="error_class">
                                        <Error
                                        name= 'Поле не должно быть пустым'
                                        type= 'error'
                                        />
                                    </div>
                                </div>
                                <div className="login_class">
                                        <Error
                                        name= 'Пароль должен содержать не менее 4-х символов'
                                        type= 'error'
                                        />
                                    </div>
                                <div className="reg-input_checkbox">
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