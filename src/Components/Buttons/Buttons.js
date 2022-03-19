import React from 'react';

const Buttons = (props) => {
    const {plus, minus} = props.count;
    return (
        <div>
            <button onClick={plus} className='p-2 ms-2'>+</button>
            <button onClick={minus} className='p-2 ms-2'>-</button>
        </div>
    );
};

export default Buttons;