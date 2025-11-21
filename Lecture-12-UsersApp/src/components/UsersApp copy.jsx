import { useEffect } from "react"
import { useState } from "react"

export default function UsersApp() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    let [ref, setRef] = useState(5)
    useEffect(() => {
        const fetchUsers = async () => {
            // const url = (ref === 0 ? `https://jsonplaceholder.typicode.com/users/` : `https://jsonplaceholder.typicode.com/users/${ref}`)
            const url = `https://jsonplaceholder.typicode.com/users/`
            try {
                const response = await fetch(url)
                const data = await response.json()
                setUsers(data)
                // ref == 0 ? setUsers(data) : setUser(data)
            } catch (error) {
                alert(error)
            }
        }
        fetchUsers()
    }, [])
    return (
        <>
            <hr />
            All Users
            <hr />
            <div className="users">

                { ref==0 ? users.map((user) => (
                        <div key={user.id} className="card">
                            <h2>{user.name}</h2>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <div className="address">
                                <p><strong>Address:</strong> {user.address.city}</p>
                            </div>
                            <div className="contact">
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Website:</strong> {user.website}</p>
                            </div>
                            <div className="company">
                                <p><strong>Company:</strong> {user.company.name}</p>
                            </div>
                        </div>
                    )) 
                    :
                    <div className="card">
                            <h2>{user.name}</h2>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                          
                            <div className="contact">
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Website:</strong> {user.website}</p>
                            </div>
                            <div className="company">
                                <p><strong>Company:</strong> {user.company.name}</p>
                            </div>
                        </div>
                }


            </div>
        </>
    )
}