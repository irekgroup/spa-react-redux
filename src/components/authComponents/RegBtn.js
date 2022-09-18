    import './authorization.css'

    function RegBtn ({name}) {

        const btn = {
            border: 'none'
        }
        return (
            <button style={btn} className="btn-reg">{name}</button>
        )
    }

    export default RegBtn