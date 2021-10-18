import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import fetchHelper from './services/servers';
import { getNames, resetNames } from './reducers/namesReducer';
import { getData, resetData } from './reducers/dataReducer';
import { useDispatch, useSelector } from 'react-redux';

import {
    createTheme,
    ThemeProvider,
    makeStyles,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    Paper
} from '@material-ui/core';

import Title from './components/Title';
import Navigation from './components/Navigation';
import Subtitle from './components/Subtitle';
import Input from './components/Input';
import Filter from './components/FilterSearch';
import FilterCheckBox from './components/FilterCheckBox';
import DataRow from './components/DataRow';
import Loading from './components/Loading';
import SingleSearch from './components/SingleSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const theme = createTheme({
    typography: {
        fontFamily: ['Quicksand']
    },
    palette: {
        primary: { main: '#66fcf1' },
        secondary: { main: '#45a29e' },
        info: { main: '#def2f1' }
    }
});

const useStyles = makeStyles(() => ({
    container: {
        fontFamily: 'Quicksand',
        border: '0',
        margin: '0'
    },
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
    filterRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    links: {
        margin: '10'
    }
}));

const App = () => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState('single');

    const classes = useStyles();

    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    const names = useSelector(state => state.names);
    const data = useSelector(state => {
        if (filter === 'NO_FILTER') {
            return state.data;
        } else if (filter === 'BLOCKED_FILTER') {
            return state.data.filter(data => data.blocked === 'yes');
        } else if (filter === 'AVAILABLE_FILTER') {
            return state.data.filter(data => data.active === 'yes');
        } else if (
            filter !== 'NO_FILTER' &&
            filter !== 'BLOCKED_FILTER' &&
            filter !== 'AVAILABLE_FILTER'
        ) {
            return state.data.filter(data =>
                data.name.toLowerCase().includes(filter.toLowerCase())
            );
        }
    });

    useEffect(() => {
        names.map(name =>
            fetchHelper
                .fetchData(name)
                .then(response => dispatch(getData(response)))
                .catch(e => console.log('error: ', e.message))
        );
        console.log('firing useEffect');
    }, [names, dispatch]);

    useEffect(() => {
        stopLoading(names, data);
    });

    const refreshData = e => {
        e.preventDefault();
        setLoading(true);
        const currentNames = names;
        console.log('refreshData names: ', currentNames);
        dispatch(resetData());
        dispatch(resetNames());
        setTimeout(() => {
            dispatch(getNames(currentNames));
        }, 200);
    };

    const handleFileUpload = e => {
        e.preventDefault();
        setLoading(true);
        dispatch(resetNames());
        dispatch(resetData());
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
            // PARSE DATA
            const bstr = e.target.result;
            const workbook = XLSX.read(bstr, { type: 'binary' });
            // GET FIRST WORKSHEET
            const wsname = workbook.SheetNames[0];
            const ws = workbook.Sheets[wsname];
            // CONVERT ARRAY OF ARRAYS
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            console.log('data from file upload: ', data);

            const list = data.split(/\r\n|\n/);
            const filteredList = list.filter(e => e !== '' && e !== undefined);
            dispatch(getNames(filteredList));
        };
        reader.readAsBinaryString(file);
    };

    const stopLoading = (data, names) => {
        if (data.length > 0 && names.length > 0 && data.length === names.length) {
            setLoading(false);
        }
    };

    console.log('App component names: ', names);
    console.log('App component data: ', data);
    console.log('loading status: ', loading);

    if (page === 'multiple') {
        return (
            <ThemeProvider theme={theme}>
                <div className={classes.container}>
                    <div>
                        <Navigation setPage={setPage} />
                        <Title />
                        <Subtitle />
                        <Input onChange={handleFileUpload} refreshData={refreshData} />
                        <div className={classes.filterRow}>
                            <Filter />
                            <FilterCheckBox />
                        </div>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label='Server Info'>
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
                                        <TableCell>Mode</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {names.map(name => (
                                        <Loading key={name} loading={loading} />
                                    ))}

                                    {data.map(data => (
                                        <DataRow key={data.name} data={data} loading={loading} />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <footer style={{ display: 'inline', width: '100%' }}>
                            <a
                                style={{ margin: '0 10px', color: '#66fcf1' }}
                                href='https://api.mcsrvstat.us/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Server Data API
                            </a>
                            {'  '}
                            <a
                                style={{ margin: '0 10px', color: '#66fcf1' }}
                                href='https://ismyserverblocked.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Block/Offline Data API
                            </a>
                            <a
                                style={{ margin: '0 10px', color: '#66fcf1' }}
                                href='https://github.com/Brandon-Warner/minecraft-server-audit-client'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FontAwesomeIcon icon={['fab', 'github']} size='lg' />
                            </a>
                        </footer>
                    </div>
                </div>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <div>
                    <Navigation setPage={setPage} />
                    <Title />
                    <SingleSearch />
                </div>
            </div>
        </ThemeProvider>
    );
};
export default App;
