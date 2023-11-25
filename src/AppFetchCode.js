// App.js
import React, { useEffect } from 'react';

function App() {

  const [users, setUsers] = React.useState([]);

  const dummyData ={
             "name": "Shekhar New",
            "email": "shekhar@mailinator.com",
            "password": "I232323",
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

  const getAllUsers = () =>{
    fetch(`https://mern-admin-backend-jxw3.onrender.com/general/employees`)
    .then(response => response.json())
    .then(data => setUsers(data.employees))
    .catch(error => console.log(error))
}

const addNewUser = () =>{
  fetch(`https://mern-admin-backend-jxw3.onrender.com/general/employee/add`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dummyData)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
}

const deleteUser = (id) =>{
  fetch(`https://mern-admin-backend-jxw3.onrender.com/general/employee/delete/${id}`,{
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(data => {
    const letupdatedUsers = users.filter((user) => user._id !== id);
    setUsers(letupdatedUsers);
    console.log(data)
  }
    
    )
  .catch(error => console.log(error))
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

        <button onClick={addNewUser}>Add New User</button>
        <button onClick={updateUser}>Update User</button>
        

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

        

      </div>
  );
}

export default App;
