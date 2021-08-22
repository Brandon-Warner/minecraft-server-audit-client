import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'
import {
    makeStyles,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    withStyles
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    filterCheckBox: {
        margin: '0 auto'
    }
}))

const StyledRadio = withStyles({
    root: {
        color: '#45a29e',
        '&$checked': {
            color: '#66fcf1'
        }
    },
    checked: {}
})(props => <Radio color='default' {...props} />)

const FilterCheckBox = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const state = useSelector(state => state.filter)
    return (
        <FormControl className={classes.filterCheckBox} component='fieldset'>
            <RadioGroup row aria-label='position' name='position' defaultValue='top'>
                <FormControlLabel
                    value='NO_FILTER'
                    control={<StyledRadio />}
                    label='All'
                    labelPlacement='top'
                    checked={state === 'NO_FILTER'}
                    onClick={() => dispatch(setFilter('NO_FILTER'))}
                />
                <FormControlLabel
                    value='BLOCKED_FILTER'
                    control={<StyledRadio />}
                    label='Blocked'
                    labelPlacement='top'
                    onClick={() => dispatch(setFilter('BLOCKED_FILTER'))}
                />
                <FormControlLabel
                    value='AVAILABLE_FILTER'
                    control={<StyledRadio />}
                    label='Active'
                    labelPlacement='top'
                    onClick={() => dispatch(setFilter('AVAILABLE_FILTER'))}
                />
            </RadioGroup>
        </FormControl>
    )
}

export default FilterCheckBox
