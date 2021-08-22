import React from 'react'
import { searchFilter } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

import { makeStyles, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(() => ({
    filterTextField: {
        width: '33%'
    },
    filterSearch: {
        width: '75%'
    },
    input: {
        color: '#66fcf1'
    }
}))

const Filter = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleChange = e => {
        e.preventDefault()
        const filter = e.target.value
        dispatch(searchFilter(filter))
    }
    return (
        <form
            style={{ margin: '1em' }}
            className={classes.filterSearch}
            noValidate
            autoComplete='off'
        >
            <TextField
                color='primary'
                className={classes.filterTextField}
                id='standard-basic'
                label='Search Names'
                onChange={handleChange}
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
            <SearchIcon color='primary' />
        </form>
    )
}

export default Filter
