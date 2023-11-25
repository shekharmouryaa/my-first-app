// App.js
import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [users, setUsers] = React.useState([]);

  const dummyData ={
             "name": "Monika New",
            "email": "MONIKA@mailinator.com",
            "password": "44545454",
            "city": "Nindpre",
            "occupation": "developer",
            "phoneNumber": "+1343432341",
  }
  const updatedDataUser ={
    email
    : 
    "nalkull@mailinator.com",
    name
    : 
    "Naccool Sharma",
    occupation
    : 
    "Designer",
    password
    : 
    "123345666",
    phoneNumber
    : 
    "232323232"
}

  const getAllUsers = async () =>{
   let allusers = await axios.get(`https://mern-admin-backend-jxw3.onrender.com/general/employees`)
   setUsers(allusers.data.employees)
  }

const addNewUser = () =>{
  axios.post(`https://mern-admin-backend-jxw3.onrender.com/general/employee/addd`, dummyData)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    toast.success(error.message)
  }
    
    )
}

const deleteUser = async (id) =>{
 let deletedUser = await  axios.delete(`https://mern-admin-backend-jxw3.onrender.com/general/employee/delete/${id}`)
 if(deletedUser.status === 200){
   const letupdatedUsers = users.filter((user) => user._id !== id);
   setUsers(letupdatedUsers);
 }
}

const updateUser = () =>{
    fetch(`https://mern-admin-backend-jxw3.onrender.com/general/employee/update/653112b82220a369426497a4`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedDataUser)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

useEffect(() =>{
  getAllUsers()
},[])


  return (
      <div className="App">
        <ToastContainer/>

        <button onClick={addNewUser}>Add New User</button>
        <button onClick={updateUser}>Update User</button>
        
        {users.length ? 

<table class="table table-striped">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Occupation</th>
        <th scope="col">City</th>
        <th scope="col">Action</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    { users.map((student,index) => 
    <tr>
    <td>{index+1}</td>
    <td>{student.name}</td>
    <td>{student.email}</td>
    <td>{student.phoneNumber}</td>
    <td>{student.occupation}</td>
    <td>{student.city}</td>
    <td>
        <button className='btn btn-danger' onClick={()=>deleteUser(student._id)}>{"Delete"}</button>
    </td>
   
   </tr>
    )
    }
</tbody>
</table>
: <div class="loader"></div>


        }


        

      </div>
  );
}

export default App;
