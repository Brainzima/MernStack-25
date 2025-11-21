import { useContext } from "react"
import ThemeContext from "../ThemeContext"

function BaraBox(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <>
            <div className="bbox" style={{
                backgroundColor: theme=='light' ? 'aqua' : 'gray',
                color: theme=='light' ? 'red' : 'white'
            }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, similique qui saepe dignissimos amet numquam, quis fuga assumenda architecto quisquam, quas veniam officiis? Deserunt repellendus obcaecati maxime possimus nostrum mollitia.</p>
            </div>
        </>
    )
}
export default BaraBox