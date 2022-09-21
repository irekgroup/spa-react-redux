    import '../components/authComponents/authorization.css'
    import InputAuth from '../components/authComponents/inputAuth'
    import Checkbox from '../components/authComponents/authCheckbox'
    import CheckboxReg from '../components/authComponents/regCheckbox'
    import Button from '../components/authComponents/Button'
    import MenuBox from '../components/menuBox/menuBox'
    import RegBtn from '../components/authComponents/RegBtn'
    import React, {useRef, useState, useEffect} from "react";
    import { Link, useNavigate } from 'react-router-dom'
    import Error from '../components/authComponents/error'

    function Authorization () {

        const navigate = useNavigate()

        const [email, setEmail] = useState('')
        let handleValueEmailAuth = (e) => setEmail(e.target.value)

        const [password, setPassword] = useState('')
        let handleValuePasswordAuth = (e) => setPassword(e.target.value)

        const errorEmptyMail = useRef(null)
        const errorEmptyPass = useRef(null)
        const loginAndPass = useRef(null)

        let getUsers;
        let registrationData = {email: null, password: null};

        let user = {}
        let emailValidUser = false
        let passwordValidUser = false

        //Проверяем существование пользователя в хранилище, сравнение с данными из хранилища введенных данных
        function isCorrect(userData) {
        getUsers = JSON.parse(localStorage.getItem('users'));
        return getUsers.some(item => item.email === userData.email && item.password === userData.password);}

        const handleAuth = (e) => {
            e.preventDefault()
            validAuth()
        }
        /* //вывод ошибки Логин или пароль неверен
        function correctData() {
            if (isCorrect({email: email.valueOf, password: password.valueOf})) {
                loginAndPass.current.style.display = 'block';
                return true
            } else {
                return false;
            }
        } */


        const validAuth = () => {
            if (email.length =='') {
                errorEmptyMail.current.style.display = 'block';
                emailValidUser= false
            } else {
                if (email.length < 4) {
                    emailValidUser = false
                    errorEmptyMail.current.style.display = 'none';
                } else {
                    errorEmptyMail.current.style.display = 'none';
                    user.email = email
                    emailValidUser = true
                }
            }
            if (password.length == '') {
                errorEmptyPass.current.style.display = 'block';
                passwordValidUser = false
            } else {
                if (password.length < 4) {
                    errorEmptyPass.current.style.display = 'none';
                    passwordValidUser = false
                } else {
                    user.password = password
                    passwordValidUser = true
                    errorEmptyPass.current.style.display = 'none';
                }

                if (emailValidUser && passwordValidUser) {
                    if (isCorrect(user)) {
                        loginAndPass.current.style.display = 'none';
                    } else{
                        loginAndPass.current.style.display = 'block';
                    }

                }
        }}
        useEffect(()=>{
            if (isCorrect) {
            navigate('/basket')
            }
        })
        return (

                <main className="authorization">
                    <MenuBox/>
                    <div className="authorization-container">
                            <div className="auth-form" /* ref={formRegRef} */>
                                <form className="authorization-form" onSubmit={handleAuth}>
                                    <div className="registration-entrance">
                                    <div className="registration-btn">
                                        <Link to='/registration'>
                                        <RegBtn name={'Зарегистрироваться'}/>
                                        </Link>

                                    </div>
                                <h1 className="authorization-header">ВХОД</h1>
                                    <div className=''>
                                    <InputAuth
                                    placeholder={'Логин'}
                                    type={'text'}
                                    value={email}
                                    onChange={handleValueEmailAuth}
                                    /* ref={login} */
                                    />
                                    <span className="error_class-auth" ref={errorEmptyMail}>
                                    Поле не должно быть пустым
                                    </span>
                                    <InputAuth
                                    placeholder={'Пароль'}
                                    type={'password'}
                                    value={password}
                                    onChange={handleValuePasswordAuth}
                                    />
                                    <span className="error_pass-auth" ref={errorEmptyPass}>
                                    Поле не должно быть пустым
                                    </span>
                                    </div>
                                <div className="authorization-input_checkbox">
                                <Checkbox/>
                                </div>
                                <Button
                                name = {'Войти'}
                                />
                                <span className="loginAndPass" ref={loginAndPass}>
                                Логин или пароль неверен
                                </span>

                                </div>
                                </form>
                            </div>
                    </div>
                </main>
        )
    }

    export default Authorization;