import React, { useState } from 'react';

const SingleSearch = () => {
    const [name, setName] = useState('');
    console.log('single search name: ', name);
    return (
        <div>
            <form>
                enter url:
                <input
                    type='string'
                    onChange={({ target }) => setName(target.value)}
                />
                <button type='submit'>search</button>
            </form>
        </div>
    );
};

export default SingleSearch;
