import React from 'react'
import { Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const Input = ({ onChange, refreshData }) => {
    // const [loading, setLoading] = useState(false)
    return (
        <div>
            <Button variant='contained' color='primary' component='label'>
                <input
                    type='file'
                    accept='.csv, .xlsx, .xls'
                    style={{ display: 'none' }}
                    onChange={onChange}
                    multiple
                />
                Upload File <CloudUploadIcon style={{ marginLeft: '5px' }}></CloudUploadIcon>
            </Button>
            <Button
                variant='contained'
                color='inherit'
                size='small'
                style={{ marginLeft: '10px' }}
                onClick={refreshData}
            >
                REFRESH DATA
            </Button>
        </div>
    )
}

export default Input
