import React from 'react';

const Count = ({ value, name }) => {
    console.log(name);
    return (
        <b>
            { value }
        </b>
    );
}

export default React.memo(Count);
