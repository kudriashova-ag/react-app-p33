import React, { useEffect, useState } from 'react';

const Spoiler = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);

    // без масиву залежностей - кожен раз при рендері компонента
    // [] - порожній масив, один раз при першому рендері
    // [state] - коли змінюється state
    useEffect(() => { 
        console.log('useEffect');
    }, [isOpen])

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{ isOpen ? "Hide": "Show" } spoiler</button>
            {isOpen && <div>Spoiler description</div>}

            <button onClick={() => setCount(count + 1)}>Count: {count}</button>

        </div>
    );
}

export default Spoiler;
