import { useContext } from "react"
import ThemeContext from "../ThemeContext"

function Box(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    return(
        <>
            <div className="box" style={{backgroundColor: theme == 'light' ? 'beige' : 'black'}}>
                Hey I am a BOX.  
                <button onClick={toggleTheme}>Toggle</button>
            </div>
        </>
    )
}
export default Box