function Error ({name, type, ref}) {
    
    const errorClass = ['error']
    if (type === 'error') {
        errorClass.push ('error')
    }
    return (
        <span
        ref={ref}
        className={errorClass.join(' ')}>{name}</span>
    )
}

export default Error

