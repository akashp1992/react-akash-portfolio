import React from 'react'
import './ThemePlate.css'
const ThemePlate = ({style}) => {
    return (
        
            <div class="color-palette">
                <label for="white" style={{backgroundColor:style}}></label>
                <label for="dark" style={{backgroundColor:"orange"}}></label>
                <label for="red" style={{backgroundColor:"red"}}></label>
                <label for="green" style={{backgroundColor:"green"}}></label>
                <label for="yellow" style={{backgroundColor:"yellow"}}></label>
                <label for="blue" style={{backgroundColor:"blue"}}></label>
                <label for="purple" style={{backgroundColor:"purple"}}></label>
                <label for="olive" style={{backgroundColor:"olive"}}></label>
            </div>
       
    )
}

export default ThemePlate
