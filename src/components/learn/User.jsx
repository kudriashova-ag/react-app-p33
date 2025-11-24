import React, { useState } from 'react';

const User = () => {
    const [user, setUser] = useState({
        name: 'Tom',
        age: 25
    });

    const [text, setText] = useState(user.name);

    const changeAge = () => {
      setUser({ ...user, age: user.age + 1 });
    }

    const changeName = () => { 
        setUser({...user, name: text})
    }

    return (
        <div>
            <h1>{user.name}, {user.age}</h1>
            <button onClick={changeAge}>Set age</button>
            <div>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
                <button onClick={ changeName }>Save</button>
            </div>
        </div>
    );
}

export default User;
