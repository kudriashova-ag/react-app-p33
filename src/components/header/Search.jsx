import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Search = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const submitHandler = () => { 
        navigate('/search?text=' + text);
    }
    
    return (
        <div>
            <input
                type="text"
                placeholder='Search...'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        submitHandler();
                    }
                }}
            />
            <button onClick={submitHandler}>Search</button>
        </div>
    );
}

export default Search;
