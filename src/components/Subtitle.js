import React from 'react'
import { Button } from '@material-ui/core'

const Subtitle = () => {
    return (
        <div style={{ margin: '1em 0' }}>
            <a
                href='https://docs.google.com/spreadsheets/d/1qHRo5yP2VPuMvxHIvp6lTmi7NonYxGGQl6fUcyU1gfc/edit?usp=sharing'
                rel='noopener noreferrer'
                target='_blank'
            >
                <Button variant='contained' color='inherit' size='small'>
                    Sample CSV File
                </Button>
            </a>
        </div>
    )
}

export default Subtitle
