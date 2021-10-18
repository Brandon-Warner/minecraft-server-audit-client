import React, { useState, useEffect } from 'react';
import fetchHelper from '../services/servers';
// import { getData } from '../reducers/dataReducer';
// import { useDispatch } from 'react-redux';

const SingleSearch = () => {
    const [name, setName] = useState('');
    const [searchName, setSearchName] = useState('');

    // const dispatch = useDispatch();
    // console.log('single search name: ', searchName);

    useEffect(() => {
        fetchHelper
            .fetchAllData(searchName)
            .then(response => console.log(response))
            .catch(e => console.log('error: ', e.message));
    }, [searchName]);

    const submit = e => {
        e.preventDefault();

        setSearchName(name);
    };

    return (
        <div>
            <form onSubmit={submit}>
                enter url:
                <input type='string' onChange={({ target }) => setName(target.value)} />
                <button type='submit'>search</button>
            </form>
        </div>
    );
};

export default SingleSearch;
