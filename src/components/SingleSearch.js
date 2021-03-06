import React, { useState, useEffect } from 'react';
import fetchHelper from '../services/servers';
// import { getData } from '../reducers/dataReducer';
// import { useDispatch } from 'react-redux';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
    TableBody,
    Paper,
    makeStyles,
    TextField,
    Button,
    CircularProgress
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
    table: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    tableBody: {
        display: 'block',
        overflow: 'auto'
    },
    headers: {
        fontStyle: 'bold',
        backgroundColor: '#def2f1'
    },
    rows: {
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: '#def2f1',
            transitionDuration: '400ms'
        }
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '2rem'
    },
    form: {
        fontSize: '20px',
        width: '60vw',
        marginTop: '20px',
        textAlign: 'center'
    },
    formInput: {
        fontSize: '20px',
        padding: '5px',
        margin: '5px',
        border: 'none',
        outline: 'none',
        borderRadius: '4px',
        width: '40%'
    },
    input: {
        color: '#eee',
        letterSpacing: '1.5px',
        fontWeight: 'bold'
    },
    searchButton: {
        margin: '10px'
    },
    buttonLoading: {
        color: '#45a29e'
    }
}));

const SingleSearch = () => {
    const [name, setName] = useState('');
    const [searchName, setSearchName] = useState('');
    const [result, setResult] = useState([]);
    const [buttonLoading, setButtonLoading] = useState(false);
    console.log('buttonLoading: ', buttonLoading);
    const classes = useStyles();

    useEffect(() => {
        fetchHelper
            .fetchAllData(searchName)
            .then(response => setResult([...result, response]))
            .catch(e => console.log('error: ', e.message));

        setButtonLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchName]);

    const submit = e => {
        e.preventDefault();

        setSearchName(name);
        setName('');
        setButtonLoading(true);
    };

    const cancelResult = e => {
        e.preventDefault();

        setResult([]);
    };

    return (
        <div>
            <div className={classes.formContainer}>
                <form className={classes.form} onSubmit={submit}>
                    <TextField
                        className={classes.formInput}
                        id='standard-basic'
                        label='LOOK UP A SINGLE MINECRAFT URL ...'
                        onChange={({ target }) => setName(target.value)}
                        InputLabelProps={{
                            classes: {
                                root: classes.input
                            }
                        }}
                        InputProps={{
                            classes: {
                                root: classes.input
                            }
                        }}
                    />
                    <SearchIcon style={{ marginTop: '5px' }} color='primary' />
                    <Button
                        variant='contained'
                        color='primary'
                        component='button'
                        type='submit'
                        className={classes.searchButton}
                    >
                        {buttonLoading ? (
                            <CircularProgress className={classes.buttonLoading} />
                        ) : (
                            'search'
                        )}
                    </Button>

                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        onClick={cancelResult}
                    >
                        CLEAR RESULTS
                    </Button>
                </form>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label='Single Server'>
                        <TableHead className={classes.headers}>
                            <TableRow key='headers'>
                                <TableCell>Name</TableCell>
                                <TableCell>Hostname</TableCell>
                                <TableCell>Ip</TableCell>
                                <TableCell>Version</TableCell>
                                <TableCell>Active</TableCell>
                                <TableCell>Players Online</TableCell>
                                <TableCell>Players Max</TableCell>
                                <TableCell>Blocked</TableCell>
                                <TableCell>Blocked Date</TableCell>
                                <TableCell>Mode Results</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {result.map(r => (
                                <TableRow key={r.name} className={classes.rows}>
                                    <TableCell>{r.name}</TableCell>
                                    <TableCell>{r.hostname}</TableCell>
                                    <TableCell>{r.ip}</TableCell>
                                    <TableCell>{r.version}</TableCell>
                                    <TableCell>{r.active}</TableCell>
                                    <TableCell>{r.playersOnline}</TableCell>
                                    <TableCell>{r.playersMax}</TableCell>
                                    <TableCell>{r.blocked}</TableCell>
                                    <TableCell>{r.blockTime}</TableCell>
                                    <TableCell style={{ maxWidth: '300px' }}>
                                        {r.modeData}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default SingleSearch;
