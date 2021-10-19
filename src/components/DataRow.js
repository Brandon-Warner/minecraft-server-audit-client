import React from 'react';
import { makeStyles, TableRow, TableCell } from '@material-ui/core';
import ModeButton from './ModeButton';

const useStyles = makeStyles(() => ({
    hidden: {
        display: 'none'
    },
    rows: {
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: '#def2f1',
            transitionDuration: '400ms'
        }
    }
}));

const DataRow = ({ data, loading }) => {
    // console.log('DATAROW DATA: ', data);
    const classes = useStyles();

    const hideWhenLoading = loading ? classes.hidden : classes.rows;

    return (
        <TableRow className={`${hideWhenLoading}`}>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.hostname}</TableCell>
            <TableCell>{data.ip}</TableCell>
            <TableCell>{data.version}</TableCell>
            <TableCell>{data.active}</TableCell>
            <TableCell>{data.playersOnline}</TableCell>
            <TableCell>{data.playersMax}</TableCell>
            <TableCell>{data.blocked}</TableCell>
            <TableCell>{data.blockTime}</TableCell>
            <ModeButton hostname={data.hostname} />
        </TableRow>
    );
};

export default DataRow;
