import React ,{useState} from 'react'
import '../styles/App.css';

function Selection({applyColor}) {
    const[backgroundColr,setBackgroundColor]= useState({background:''})
    return (
        <div className="fix-box" style={backgroundColr} onClick={() => applyColor(setBackgroundColor)}>
            <h2 className="subheading">Selection</h2> 
        </div>
    )
}

export default Selection

