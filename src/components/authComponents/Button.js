    import '../authComponents/authorization.css'

    function Button ({type, name, onClick, styles}) {

        const btnClass = ['authButton']

        if (type === 'authButton') {
            btnClass.push('authButton')
        }
        else if(type === 'productButton')
        {btnClass.push('productButton')}

        return (
            <button
            onClick={onClick}
            type={type}
            styles={styles}
            className={btnClass.join(' ')}> {name}
            </button>
        )
    }

    export default Button;

