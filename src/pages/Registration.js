import '../components/authComponents/authorization.css'
import InputAuth from '../components/authComponents/inputAuth'
import CheckboxReg from '../components/authComponents/regCheckbox'
import Button from '../components/authComponents/Button'
import RegBtn from '../components/authComponents/RegBtn'
import React, {useRef, useState} from "react";
import { Link } from 'react-router-dom'
import Error from '../components/authComponents/error'

function Registration () {

    const errorEmptyMail = useRef(null)
    const error4CharactersMail = useRef(null)
    const errorEmptyPass = useRef(null)
    const error4CharactersPass = useRef(null)

    /* console.log(errorEmptyMail); */
    console.log(error4CharactersMail);

    let users = JSON.parse (localStorage.getItem('users')) ? JSON.parse (localStorage.getItem('users')) : []

    const saveUser = (userData) => {
        let result = users.find (user => user.email == userData.email)

        if (!result) {
            users.push(userData)
            localStorage.users = JSON.stringify(users)
            return true
        } else {
            return false
        }
    }

    let user = {}
    let emailValidUser = false
    let passwordValidUser = false

    const [email, setEmail] = useState('')
    let handleValueEmailRegistration = (e) => setEmail(e.target.value)


    const [password, setPassword] = useState('')
    let handleValuePasswordRegistration = (e) => setPassword(e.target.value)

    const handleRegistration = (e) => {
        e.preventDefault()
        validRegistration()
    }

    const validRegistration = () => {
        if (email.length =='') {
            errorEmptyMail.current.style.display = 'block';
            emailValidUser= false
            error4CharactersMail.current.style.display = 'none';
        } else {
            if (email.length < 4) {
                emailValidUser = false
                errorEmptyMail.current.style.display = 'none';
                error4CharactersMail.current.style.display = 'block';
            } else {
                error4CharactersMail.current.style.display = 'none';
                errorEmptyMail.current.style.display = 'none';
                user.email = email
                emailValidUser = true
            }
        }
        if (password.length == '') {
            errorEmptyPass.current.style.display = 'block';
            passwordValidUser = false
            error4CharactersPass.current.style.display = 'none';
        } else {
            if (password.length < 4) {
                error4CharactersPass.current.style.display = 'block';
                errorEmptyPass.current.style.display = 'none';
                passwordValidUser = false
            } else {
                error4CharactersPass.current.style.display = 'none';
                user.password = password
                passwordValidUser = true
                errorEmptyPass.current.style.display = 'none';
            }
        }
        if (emailValidUser && passwordValidUser) {
            if (saveUser(user)) {

            } else{}
        }
    }
    return (

        <main className="authorization">
            <div className="registration-container">
            <div className="reg-form " /* ref={formRegAuth} */>
                                <form className="authorization-form" onSubmit={handleRegistration}>
                                    <div /* onClick={ClickReg} */ className="registration-btn">
                                        <Link to='/authorization'>
                                        <RegBtn name={'Авторизоваться'}/></Link>

                                    </div>
                                <h1 className="authorization-header">РЕГИСТРАЦИЯ</h1>
                                <div className=''>
                                <InputAuth
                                placeholder={'Логин'}
                                type={'text'}
                                value={email}
                                onChange={handleValueEmailRegistration}
                                /* ref={login} */
                                />
                                <span className="error_class" ref={errorEmptyMail}>Поле обязательно для заполнения</span>
                                <span className="login_class" ref= {error4CharactersMail}>Логин должен содержать не менее 4-х символов</span>

                                <InputAuth
                                /* ref={password} */
                                placeholder={'Пароль'}
                                type={'password'}
                                value={password}
                                onChange={handleValuePasswordRegistration}
                                />
                                <span className="error_class-pass" ref={errorEmptyPass}>
                                Поле не должно быть пустым
                                </span>
                                <span className="login_class-pass" ref={error4CharactersPass}>
                                Пароль должен содержать не менее 4-х символов
                                </span>

                                </div>
                                <div className="reg-input_checkbox">
                                {/* <Checkbox/> */}
                                <CheckboxReg/>
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

export default Registration