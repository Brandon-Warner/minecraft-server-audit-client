import { makeStyles, TableRow, TableCell } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles(() => ({
    hidden: {
        display: 'none'
    },
    rows: {
        backgroundColor: '#eee'
    }
}))

const Loading = ({ loading, name }) => {
    const classes = useStyles()
    const showWhenLoading = loading ? classes.rows : classes.hidden
    return (
        <TableRow key={name} className={`${showWhenLoading}`}>
            <TableCell>
                <LinearProgress color='secondary' />
            </TableCell>
            <TableCell>
                <LinearProgress color='secondary' />
            </TableCell>
            <TableCell>
                <LinearProgress color='secondary' />
            </TableCell>
            <TableCell>
                <LinearProgress color='secondary' />
            </TableCell>
            <TableCell>
                <LinearProgress color='secondary' />
            </TableCell>
            <TableCell>
                <LinearProgress color='secondary' />
            </TableCell>
            <TableCell>
                <LinearProgress color='secondary' />
            </TableCell>
            <TableCell>
                <LinearProgress color='secondary' />
            </TableCell>
            <TableCell>
                <LinearProgress color='secondary' />
            </TableCell>
            <TableCell>
                <LinearProgress color='secondary' />
            </TableCell>
        </TableRow>
    )
}

export default Loading
