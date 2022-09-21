import './regCheckbox.css'

    function CheckboxReg () {
        return (
            <div className="checkboxReg">
            <input type="checkbox" className="checkboxReg_custom-radio" id="happy1" />
            <label className="checkboxReg-radio_label" for="happy1" checked="checked">
            Я согласен получать обновления на почту
            </label>
            </div>
    )
    }

    export default CheckboxReg;