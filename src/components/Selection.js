import React from 'react'

function Selection(props) {

    return (
        <div>
            <select onChange={props.applyColor}>
                <option></option>
            </select>
        </div>
    )
}

export default Selection

