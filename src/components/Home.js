import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link} from "react-router-dom";
const Home = () =>{
    const[users,setUsers] = useState([]);
    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers = async() =>{
        const result = await axios.get("http://localhost:3003/users");
        console.log(result);
        setUsers(result.data.reverse());
    };
    
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home</h1>
            
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">e-mail</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {users.map((user,index)=>(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link class="btn btn-primary mr-2" to={`/user/${user.id}`}>View</Link>
                                        <Link class="btn btn-outline-primary mr-2" to={`/user/edit/${user.id}`}>Edit</Link>
                                        <Link class="btn btn-danger" to="">Delete</Link>
                                    </td>
                                </tr>
                            ))}
                    
                    </tbody>
                    </table>
            </div>
        </div>
    )
}
export default Home;