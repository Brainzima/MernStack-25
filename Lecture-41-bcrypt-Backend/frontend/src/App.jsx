import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import bcrypt from 'bcryptjs';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const [nameedit, setNameedit] = useState('');
  const [emailedit, setEmailedit] = useState('');
  const [roleedit, setRoleedit] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editid, setEditid] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  const addUser = async (e) => {
    e.preventDefault();
    if (name == '' || email == '' || role == '' || password == '') {
      toast.error("Field Cant be userty!");
    } else {
      const newUser = {
        name: name,
        email: email,
        role: role,
        password: password
      };
      try {
        const response = await fetch('http://localhost:4000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('User added successfully:', data);
          setUsers([...users, newUser]);
          setName('');
          setEmail('');
          setRole('');
          setPassword('');
          toast.success("User Added Successfully!");
        } else {
          console.error('Server returned an error:', response.statusText);
        }
      } catch (error) {
        console.error('Error connecting to the server:', error);
      }
    }

  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this user?")) {
      try {
        const response = await fetch(`http://localhost:4000/api/users/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          toast.success("User Deleted Successfully!");
          setUsers(users.filter((user) => user._id !== id));
        }
      } catch (error) {
        alert(error);
      }
    }
  }

  const handleEditStart = (user) => {
    setNameedit(user.name);
    setEmailedit(user.email);
    setRoleedit(user.role);
    setEditid(user._id);
    setIsEdit(true);
  }

  const updateUser = async(e)=>{
    e.preventDefault();
    if (nameedit == '' || emailedit == '' || roleedit == '') {
      toast.error("Field Cant be userty!");
    } else {
      const editEmp = {
        name: nameedit,
        email: emailedit,
        role: roleedit
      };
      try {
        const response = await fetch(`http://localhost:4000/api/users/${editid}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editEmp),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('User updated successfully:', data);
          setUsers(users.map((user)=> user._id == editid ? editEmp : user ));
          setNameedit('');
          setEmailedit('');
          setRoleedit('');
          setEditid('');
          setIsEdit(false);
          toast.success("User Updated Successfully!");
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
        <h1 className="text-center mb-4">User Management System</h1>

        {
          isEdit ?

            <div className="card card-body">
              <form onSubmit={updateUser}>
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="text"
                      value={nameedit}
                      onChange={(e) => setNameedit(e.target.value)}
                      className="form-control"
                      placeholder="User Name" />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      value={emailedit}
                      onChange={(e) => setEmailedit(e.target.value)}
                      className="form-control"
                      placeholder="User Email" />
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
                    <input type="submit" value="Update User" className="btn btn-warning" />
                  </div>
                </div>
              </form>
            </div>
            :
            <div className="card card-body">
              <form onSubmit={addUser}>
                <div className="row">
                  <div className="col-md-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      placeholder="User Name" />
                  </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="User Email" />
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
                  <div className="col-md-3">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Password" />
                  </div>
                  <div className="col-md-1">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                  </div>
                </div>
              </form>
            </div>
        }

        <div className="row">

          {users.map((user) => (
            <div key={user._id} className="col-md-3 mt-2">
              <div className="card">
                <div className="card-body text-center">
                  <h1 className="card-title">{user.name}</h1>
                  <p className="badge bg-info">{user.role}</p>
                  <p>{user.email}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button
                    onClick={() => handleEditStart(user)}
                    className="btn btn-sm btn-info">Edit</button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(user._id)}
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
