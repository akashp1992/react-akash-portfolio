import React, { createContext, useState } from 'react'
import ThemePlate from '../components/ThemePlate/ThemePlate'
import { themeData } from '../data/themeData'
export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }



    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        
        <ThemeContext.Provider value={value}>
            {props.children}
            <ThemePlate style={value.theme}/>
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider