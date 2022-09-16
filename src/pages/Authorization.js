import '../components/authComponents/authorization.css'
import InputAuth from '../components/authComponents/inputAuth'
import Checkbox from '../components/authComponents/authCheckbox'
import Button from '../components/authComponents/Button'
import MenuBox from '../components/menuBox/menuBox'

function Authorization () {
    return (
        <main className="authorization">
            <MenuBox/>
            <div className="authorization-container">
                <form className="authorization-form">
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
        </main>
    )
}

export default Authorization;