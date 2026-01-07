import { useEffect } from "react";
import { useState } from "react"

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  const addEmployee = async(e) => {
    e.preventDefault();
    const newEmp = {
      name: name,
      email: email,
      role: role
    };
    try {
      const response = await fetch('http://localhost:4000/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmp),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Employee added successfully:', data);
        setName('');
        setEmail('');
        setRole('');
        fetchData();
      } else {
        console.error('Server returned an error:', response.statusText);
      }
    } catch (error) {
      console.error('Error connecting to the server:', error);
    }

  }

  return (
    <>
      <div className="container mt-5 p-5 bg-light">
        <h1 className="text-center mb-4">Employee Management System</h1>

        <div className="card card-body">
          <form onSubmit={addEmployee}>
            <div className="row">
              <div className="col-md-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Employee Name" />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Employee Email" />
              </div>
              <div className="col-md-2">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-select" >
                  <option selected disabled>Select Role</option>
                  <option value="Manager">Manager</option>
                  <option value="Assistant">Assistant</option>
                  <option value="Peon">Peon</option>
                  <option value="CEO">CEO</option>
                  <option value="HR">HR</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="col-md-2">
                <input type="submit" value="Add Employee" className="btn btn-primary" />
              </div>
            </div>
          </form>
        </div>


        <div className="row">

          {employees.map((emp) => (
            <div key={emp._id} className="col-md-3 mt-2">
              <div className="card">
                <div className="card-body text-center">
                  <h1 className="card-title">{emp.name}</h1>
                  <p className="badge bg-info">{emp.role}</p>
                  <p>{emp.email}</p>
                </div>
              </div>
            </div>
          ))
          }

        </div>
      </div>
    </>
  )
}

export default App
