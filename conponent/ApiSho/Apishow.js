import React from 'react';
import { store } from '../utlits/LocalSotrage';
import './Apishow.css'

const Apishow = ({info}) => {
    const {name, age, id} = info
    return (
        <div className='x'>
            <h1>Name: {name}</h1>
            <p>Age {age}</p>
            <button onClick={()=>{store(id)}}>Add to card</button>
        </div>
    );
};

export default Apishow;