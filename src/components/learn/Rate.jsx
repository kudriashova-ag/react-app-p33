import React, { useState } from 'react';

const Rate = () => {
    const [rate, setRate] = useState({
        like: 0,
        dislike: 0
    });

    const changeRate = (name) => { 
        setRate({...rate, [name]: rate[name] + 1})
    }
 
    return (
      <div>
        <p>Зробити дві кнопки Like 0 та Dislike 0</p>
            <button onClick={() => changeRate("like")}>Like { rate.like }</button>
            <button onClick={() => changeRate("dislike")}>DisLike { rate.dislike}</button>
      </div>
    );
}

export default Rate;
