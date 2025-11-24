import React, { useState } from 'react';

const Spoiler = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{ isOpen ? "Hide": "Show" } spoiler</button>
            {isOpen && <div>Spoiler description</div>}
        </div>
    );
}

export default Spoiler;
