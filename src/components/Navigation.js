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

        '&:hover': {
            transform: 'scale(1.10)',
            textDecoration: 'underline',
            transition: 'all 300ms linear',
            cursor: 'pointer'
        }
    }
}));

const Navigation = () => {
    const classes = useStyles();

    return (
        <div>
            <ul className={classes.list}>
                <li className={classes.list}>
                    <button className={classes.listButton}>SINGLE SEARCH</button>
                </li>
                <li className={classes.list}>
                    <button className={classes.listButton}>MULTIPLE SEARCH</button>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
