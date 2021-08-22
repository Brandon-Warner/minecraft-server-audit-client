import React from 'react'
import { Button } from '@material-ui/core'

const Subtitle = () => {
    return (
        <div style={{ margin: '1em' }}>
            <a
                href='https://docs.google.com/spreadsheets/d/1qHRo5yP2VPuMvxHIvp6lTmi7NonYxGGQl6fUcyU1gfc/edit?usp=sharing'
                rel='noopener noreferrer'
                target='_blank'
                style={{textDecoration: 'none'}}
            >
                <Button variant='contained' color='secondary' size='small' >
                    Sample CSV File
                </Button>
            </a>
        </div>
    )
}

export default Subtitle
