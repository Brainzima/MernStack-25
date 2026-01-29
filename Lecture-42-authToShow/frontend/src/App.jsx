import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const [uemail, setUemail] = useState('');
  const [upass, setUpass] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/users',{
        header : {'Authorization': token}
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect((token) => {
    if (token) {
      fetchData();
    }
  }, [token])

  const handleLogin = async (e) => {
    e.preventDefault();
    if (uemail === "" || upass === "") {
      alert("Email or Password can't be empty!");
    } else {
      const loginUser = {
        email: uemail,
        password: upass
      }
      try {
        const reponse = await fetch("http://localhost:4000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(loginUser)
        })

        if (reponse.ok) {
          const message = await reponse.json()
          localStorage.setItem('token', message.token)
          setToken(message.token)
          setMessage(message)
          setUemail("")
          setUpass("")
          setIsLoggedin(true)
        } else {
          alert("Email Or Password invalid")
        }
      } catch (error) {
        alert("Error By Function")
      }
    }
  }
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setIsLoggedin(false);
  }

  return (
    <>
      <div className="container mt-5 p-5 bg-light">

        {
          token ?
            <>
              <div className="alert alert-success">Welcome {message.name}</div>
              <button onClick={logout}>Logout</button>

              <div className="row">

                {
                  users.map((user) => (
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body">
                          <h1 className="card-title">{user.name}</h1>
                          <p>{user.email}</p>
                          <p>{user.role}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }

              </div>
            </>

            :

            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h1>Login To Show</h1>
                    <form onSubmit={handleLogin}>
                      <input type="text"
                        value={uemail}
                        onChange={(e) => setUemail(e.target.value)}
                        className="form-control mt-2"
                        placeholder="Email Address"
                      />
                      <input type="password"
                        value={upass}
                        onChange={(e) => setUpass(e.target.value)}
                        className="form-control mt-2"
                        placeholder="Password"
                      />
                      <input type="submit" className="btn btn-primary mt-2" />
                    </form>
                  </div>
                </div>
              </div>
            </div>

        }

      </div>
    </>
  )
}

export default App
