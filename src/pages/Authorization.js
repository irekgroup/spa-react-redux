import '../components/authComponents/authorization.css'
import InputAuth from '../components/authComponents/inputAuth'
import Checkbox from '../components/authComponents/authCheckbox'
import AuthButton from '../components/authComponents/authButton'

function Authorization () {
    return (
        <main className="authorization">
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
                <AuthButton/>
                </form>
            </div>
        </main>
    )
}

export default Authorization;