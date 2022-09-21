    function InputAuth ({type, id, onChange, value, placeholder}) {
        return (
            <input
            id={id}
            onChange={onChange}
            value={value}
            type={type}
            placeholder= {placeholder}
            className="authorization-input"
            />
        )
    }

    export default InputAuth;