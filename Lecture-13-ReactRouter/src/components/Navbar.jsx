import { Link } from "react-router-dom"

function Navbar(){
    return (
        <>
        <div className="w-full h-10 flex flex-row justify-center items-center bg-pink-200">
            <ul className="flex flex-row gap-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/greet/ajit">Ajit</Link></li>
                <li><Link to="/greet/vishal">Vishal</Link></li>
            </ul>
        </div>
        </>
    )
}
export default Navbar