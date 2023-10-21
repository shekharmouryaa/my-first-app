import React, { useState } from 'react'

const UserForm = () => {

    const defaultFrom = {
        username : "",
        email : ""
    }

const [form , setForm] = useState(defaultFrom)

const handleChange = (event)=>{
    setForm({...form, [event.target.name] : event.target.value })
}

const submitForm = (event) =>{
    event.preventDefault()
    console.log(form);
}

    return (
        <div className="container">
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                    <div className="image">
                    </div>
                </div>
                <div className="body-form">
                    <form onSubmit={submitForm}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-user"></i></span>
                            </div>
                            <input type="text" name="username" value={form.username} className="form-control" placeholder="Username" onChange={handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-lock"></i></span>
                            </div>
                            <input type="email" name="email" value={form.email} className="form-control" placeholder="Email" onChange={handleChange} />
                        </div>
                        <button className="btn btn-secondary btn-block">LOGIN</button>
                    </form>
                   
                </div>
            </div>
        </div>
    )
}

export default UserForm

