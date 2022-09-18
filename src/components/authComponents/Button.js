    import '../authComponents/authorization.css'

    function Button ({type, name}) {

        const btnClass = ['authButton']

        if (type === 'authButton') {
            btnClass.push('authButton')
        }
        else if(type === 'productButton')
        {btnClass.push('productButton')}

        return (
            <button className={btnClass.join(' ')}> {name}</button>
        )
    }

    export default Button;

