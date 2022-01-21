import '../Css/Input.css';
import { useState } from "react";
const Input = () => {
    const [title, setTitle] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div className='input'>
            <label>Модель смартфона</label> <br></br>
            <input placeholder='H: iphone 13' value={title} onChange={titleHandler} />
            <p>{title}</p>
        </div>
    );
};
export default Input;