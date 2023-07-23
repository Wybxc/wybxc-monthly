import React from 'react'

const Right: React.FC = (props) => {
    return (
        <div style={{ textAlign: 'right' }}>
            {props.children}
        </div>
    )
}

export default Right
