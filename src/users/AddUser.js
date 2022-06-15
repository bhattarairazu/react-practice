import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () =>{
    let navigate = useNavigate();
    const[user,setUser] = useState({
        name:"",
        username:"",
        email: "",
        phone: "",
        website: ""

    });
    const {name,username,email,phone,website} = user;
    const onInputChange = e =>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        navigate("/");

    };
    return (
        <div>
            
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
            <h1>Add User</h1>
                    <form onSubmit={e=>onSubmit(e)}>
                        
                        <div className="form-group">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1"
                             placeholder="Enter your name"
                             name = "name"
                             value={name}
                             onChange = {e=>onInputChange(e)}
                             />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1" className="form-label">Username</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter Your Username"
                            name = "username"
                            value={username}
                            onChange = {e=>onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1" className="form-label">E-mail</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter your E-mail address"
                            name = "email"
                            value={email}
                            onChange = {e=>onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter your Phone Number"
                            name="phone"
                            value={phone}
                            onChange = {e=>onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1" className="form-label">Website</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter your Website"
                            name="website"
                            value={website}
                            onChange = {e=>onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-primary btn-block">Add User</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddUser;