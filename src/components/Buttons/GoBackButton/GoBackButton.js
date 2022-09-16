import './GoBackButton.css'
import {useNavigate} from 'react-router-dom'

function GoBackButton () {
    const navigation = useNavigate()
    const goBack = () => navigation(-1)
    return (
        <button onClick={goBack} className="PageProducts_back"><p className="PageProducts_symbol">←</p>
                    </button>
    )
}

export default GoBackButton