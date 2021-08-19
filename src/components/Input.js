import React from 'react'
import { Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const Input = ({ onChange }) => {
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
        </div>
    )
}

export default Input
