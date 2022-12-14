import axios from "axios";
import { useNavigate } from "react-router-dom";
import { React, useState } from "react";

const AddUser =() =>{
    let navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        major:"",
    });

    const {name, username, email, major} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
        navigate.push("/");
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your User Name"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email Address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Major"
                        name="major"
                        value={major}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>

        </div>
    );
}

export default AddUser;