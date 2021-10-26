import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles, Button, TableCell, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    buttonLoading: {
        color: '#45a29e'
    }
}));

const ModeButton = ({ hostname }) => {
    const [open, setOpen] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [fetchResponse, setFetchResponse] = useState('');

    const classes = useStyles();

    const fetchData = async hostname => {
        setButtonLoading(true);
        try {
            const data = await axios.get(
                `https://fast-thicket-91718.herokuapp.com/api/offlineinfo/${hostname}`
            );
            const response = data.data;
            // console.log('ACTIVE BUTTON response: ', response)
            if (!response.success) {
                setFetchResponse('Error while checking offline-mode status');
            } else if (response.offlineMode) {
                setFetchResponse('Server is using offline mode');
            } else {
                setFetchResponse(
                    "Server aborted the join process, it's either using online mode or a whitelist"
                );
                if (response.reason) {
                    fetchResponse.concat(`reason was: ${response.reason}`);
                }
            }
        } catch (error) {
            setFetchResponse('error connecting to server - please try again later');
        }

        setOpen(!open);
        setButtonLoading(false);
    };
    // console.log('fetchResponse: ', fetchResponse)

    return (
        <TableCell>
            {fetchResponse ? (
                fetchResponse
            ) : (
                <Button variant='contained' color='primary' onClick={() => fetchData(hostname)}>
                    {buttonLoading ? (
                        <CircularProgress className={classes.buttonLoading} />
                    ) : (
                        'Mode'
                    )}
                </Button>
            )}
        </TableCell>
    );
};

export default ModeButton;
