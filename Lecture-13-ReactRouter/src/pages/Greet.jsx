import { useParams } from "react-router-dom"

function Greet(){
    const { ref } = useParams()
    return(
       <>
        <div className="w-full h-100 bg-purple-200 text-red-500">
            <h2 className="text-6xl">Good Morning, {ref}</h2>
        </div>
       </> 
    )
}
export default Greet