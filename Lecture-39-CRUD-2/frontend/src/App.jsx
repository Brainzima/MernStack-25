import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [nameedit, setNameedit] = useState('');
  const [emailedit, setEmailedit] = useState('');
  const [roleedit, setRoleedit] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editid, setEditid] = useState('');

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


  const addEmployee = async (e) => {
    e.preventDefault();
    if (name == '' || email == '' || role == '') {
      toast.error("Field Cant be empty!");
    } else {
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
          setEmployees([...employees, newEmp]);
          setName('');
          setEmail('');
          setRole('');
          toast.success("Employee Added Successfully!");
        } else {
          console.error('Server returned an error:', response.statusText);
        }
      } catch (error) {
        console.error('Error connecting to the server:', error);
      }
    }

  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this employee?")) {
      try {
        const response = await fetch(`http://localhost:4000/api/employees/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          toast.success("Employee Deleted Successfully!");
          setEmployees(employees.filter((emp) => emp._id !== id));
        }
      } catch (error) {
        alert(error);
      }
    }
  }

  const handleEditStart = (emp) => {
    setNameedit(emp.name);
    setEmailedit(emp.email);
    setRoleedit(emp.role);
    setEditid(emp._id);
    setIsEdit(true);
  }

  const updateEmployee = async(e)=>{
    e.preventDefault();
    if (nameedit == '' || emailedit == '' || roleedit == '') {
      toast.error("Field Cant be empty!");
    } else {
      const editEmp = {
        name: nameedit,
        email: emailedit,
        role: roleedit
      };
      try {
        const response = await fetch(`http://localhost:4000/api/employees/${editid}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editEmp),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Employee updated successfully:', data);
          setEmployees(employees.map((emp)=> emp._id == editid ? editEmp : emp ));
          setNameedit('');
          setEmailedit('');
          setRoleedit('');
          setEditid('');
          setIsEdit(false);
          toast.success("Employee Updated Successfully!");
        } else {
          console.error('Server returned an error:', response.statusText);
        }
      } catch (error) {
        console.error('Error connecting to the server:', error);
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="container mt-5 p-5 bg-light">
        <h1 className="text-center mb-4">Employee Management System</h1>

        {
          isEdit ?

            <div className="card card-body">
              <form onSubmit={updateEmployee}>
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="text"
                      value={nameedit}
                      onChange={(e) => setNameedit(e.target.value)}
                      className="form-control"
                      placeholder="Employee Name" />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      value={emailedit}
                      onChange={(e) => setEmailedit(e.target.value)}
                      className="form-control"
                      placeholder="Employee Email" />
                  </div>
                  <div className="col-md-2">
                    <select
                      value={roleedit}
                      onChange={(e)=>setRoleedit(e.target.value)}
                      className="form-select" >
                      <option defaultValue="Peon">Select Role</option>
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
                    <input type="submit" value="Update Employee" className="btn btn-warning" />
                  </div>
                </div>
              </form>
            </div>
            :
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
                      <option defaultValue="Peon">Select Role</option>
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
        }

        <div className="row">

          {employees.map((emp) => (
            <div key={emp._id} className="col-md-3 mt-2">
              <div className="card">
                <div className="card-body text-center">
                  <h1 className="card-title">{emp.name}</h1>
                  <p className="badge bg-info">{emp.role}</p>
                  <p>{emp.email}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button
                    onClick={() => handleEditStart(emp)}
                    className="btn btn-sm btn-info">Edit</button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(emp._id)}
                  >Delete</button>
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
