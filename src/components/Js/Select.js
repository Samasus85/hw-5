import '../Css/Select.css';
import { useState } from "react";
function Select() {
    const [value, setValue] = useState('')
    return (<div>
        <div className="select">
            <label>Выберите марку смартфона</label> <br></br>

            <select value={value} onChange={event => setValue(event.target.value)}>
                <option value="1">Samsung</option>
                <option value="2">Iphone</option>
                <option value="3">Redmi</option>
                <option value="4">LG</option>
            </select>
            <p>
                {value === '1' && 'вы выбрали Samsung'}
                {value === '2' && 'вы выбрали Iphone'}
                {value === '3' && 'вы выбрали Redmi'}
                {value === '4' && 'вы выбрали LG'}
            </p>
        </div>
    </div>
    );
};

export default Select;