import React from 'react'

export default function Error(props) {
    const {error} = props
    
    return (
        <div className="error">
            {error}
        </div>
    )
}
