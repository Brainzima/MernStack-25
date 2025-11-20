import { useContext } from "react"
import ThemeContext from "../ThemeContext"

function Box(){
    const [theme, toggleTheme] = useContext(ThemeContext)
    return(
        <>
            <div className="box" style={{backgroundColor: theme=='light' ? 'black' : 'green'}}>
                Hey I am a BOX.
            </div>
        </>
    )
}
export default Box