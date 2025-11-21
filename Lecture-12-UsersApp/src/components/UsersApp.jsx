import { useEffect, useState } from "react"

export default function UsersApp() {
  const [users, setUsers] = useState([])
  const [single, setSingle] = useState(null)   // pehle null rakho
  const [ref, setRef] = useState(0)           // 0 = sab users

  useEffect(() => {
    const fetchUsers = async () => {
      const url =
        ref === 0
          ? "https://jsonplaceholder.typicode.com/users"
          : `https://jsonplaceholder.typicode.com/users/${ref}`

      try {
        const response = await fetch(url)
        // if (!response.ok) {
        //   throw new Error("HTTP error " + response.status)
        // }
        const data = await response.json()
        if (ref === 0) {
          setUsers(data)
          setSingle(null)
        } else {
          setSingle(data)
        }
      } catch (error) {
        console.error(error)
        alert("Error: " + error.message)
      }
    }

    fetchUsers()
  }, [ref])        // yahan ref lagana zaroori hai

  return (
    <>
      <hr />
      All Users
      <hr />

      {/* ref change karne ke liye input/button */}
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setRef(0)}>All Users</button>
        <button onClick={() => setRef(1)}>User 1</button>
        <button onClick={() => setRef(2)}>User 2</button>
        {/* yahan tum input box bhi de sakte ho */}
      </div>

      <div className="users">
        {ref === 0 ? (
          users.map(user => (
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
        ) : single ? (
          <div key={single.id} className="card">
            <h2>{single.name}</h2>
            <p><strong>Username:</strong> {single.username}</p>
            <p><strong>Email:</strong> {single.email}</p>
            <div className="address">
              <p><strong>Address:</strong> {single.address.city}</p>
            </div>
            <div className="contact">
              <p><strong>Phone:</strong> {single.phone}</p>
              <p><strong>Website:</strong> {single.website}</p>
            </div>
            <div className="company">
              <p><strong>Company:</strong> {single.company.name}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}
