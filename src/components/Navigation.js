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
        letterSpacing: '1px',
        fontSize: '16px',

        '&:hover ': {
            transform: 'scale(1.10)',
            transition: 'transform 300ms linear',
            cursor: 'pointer'
        },
        '&:after': {
            transform: 'scale(1)',
            transition: 'transform 200ms linear'
        }
    }
}));

const Navigation = () => {
    const classes = useStyles();

    return (
        <div>
            <ul className={classes.list}>
                <li className={classes.list}>
                    <button className={classes.listButton}>Single Search</button>
                </li>
                <li className={classes.list}>
                    <button className={classes.listButton}>Multiple Search</button>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
