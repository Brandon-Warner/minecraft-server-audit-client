import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    list: {
        display: 'flex',
        justifyContent: 'right',
        alignContent: 'center'
    },
    listItem: {
        listStyleType: 'none'
    },
    listButton: {
        background: 'none',
        textDecoration: 'none',
        margin: '0 10px',
        border: 'none',
        color: '#66fcf1',
        letterSpacing: '1.5px',
        fontSize: '16px',
        transition: 'all 300ms linear',
        cursor: 'pointer',

        '&:hover': {
            transform: 'scale(1.10)',
            textDecoration: 'underline'
        }
    }
}));

const Navigation = ({ setPage }) => {
    const classes = useStyles();

    const pageToSingle = () => setPage('single');
    const pageToMultiple = () => setPage('multiple');

    return (
        <div>
            <ul className={classes.list}>
                <li className={classes.list}>
                    <button className={classes.listButton} onClick={pageToSingle}>
                        SINGLE SEARCH
                    </button>
                </li>
                <li className={classes.list}>
                    <button className={classes.listButton} onClick={pageToMultiple}>
                        MULTI SEARCH
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
