import { useEffect } from "react"
import { useState } from "react"

function JokesApp() {
    const [joke, setJoke] = useState({})
    useEffect(() => {
        async function getJoke() {
            try {
                const response = await fetch(`https://sv443.net/jokeapi/v2/joke/Any`)
                const data = await response.json()
                setJoke(data)
            } catch (error) {
                alert(error)
            }
        }
        getJoke()
    }, [])
    return (
        <>
            <h1>Jokes App</h1>
            <hr />
            <div className="container">
                <div className="joke-card">
                    <div className="header">
                        <div className="joke-type">Type: {joke.type}</div>
                        <div className="joke-category">Categories: {joke.category}</div>
                    </div>
                    <div className="joke-place">
                        {
                            joke.type == 'single' ? 
                            
                            <p>{joke.joke}</p>
                            :
                            <>
                            <p>{joke.setup}</p>
                            <p>{joke.delivery}</p>                            
                            </>
                        
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default JokesApp