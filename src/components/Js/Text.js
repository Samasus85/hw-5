import '../Css/Text.css';
import React, { useState } from 'react';

function Text() {
    const [value, setValue] = useState('');
    const changeHandle = (event) => {
        setValue(event.target.value)
    };
    return (
        <div className='text'>
            <textarea placeholder='Ваш комментарий' value={value} onChange={changeHandle} />
            <div className='text__p'>
                <p >{value}</p>
            </div>
        </div>
    )
};
export default Text;
