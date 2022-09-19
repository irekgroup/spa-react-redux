function Error ({name, type}) {
    
    const errorClass = ['error']
    if (type === 'error') {
        errorClass.push ('error')
    }
    return (
        <span className={errorClass.join(' ')}>{name}</span>
    )
}

export default Error

