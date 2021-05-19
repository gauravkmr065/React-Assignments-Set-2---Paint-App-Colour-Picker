import React ,{useState} from 'react'

function Selection(applyColor) {
    const [background,selectNextBackground] = useState({background:""})
    
    return (
        <div className="fix-box" style={background} onClick={()=>applyColor}>
            <h2 className="subheading">Selection</h2> 
        </div>
    )
}

export default Selection

