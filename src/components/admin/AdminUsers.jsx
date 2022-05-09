import axios from "../../axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
const AdminUsers = () =>{
    const [userData,setUserData] = useState([]);
    const FetchUserDataList = async() =>{
        await axios.get('admin/getUsers')
        .then(d=>{
            console.log(d)
            setUserData(d.data)
        }).catch(err=>console.log("err",err));
    }
    const handleDeleteUser =async(id) =>{}
    useEffect(()=>{
        FetchUserDataList()
    },[])
    return(
        <>
            <div className="container">
            <Link to="/admin/addUser" className="btn btn-success ">Add User</Link>
            {userData.length > 0 ?
                <div>
                        <table className="table table-striped ">
                        <caption>List of users</caption>
                            <thead>
                                <tr className="tablehead">
                                    <th scope="col">Id</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col"></th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                            {userData.map((item,index)=>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td >{item.username}</td>
                                    <td >{item.email}</td>
                                    <td ></td>
                                    <td >
                                    <Link to={"/seller/editBook/" + item.id} >
                                        <span className="btn btn-info">
                                        <i className="fa-solid fa-pen"></i>
                                        
                                        </span>
                                        
                                    </Link>
                                    <span className="btn btn-danger" onClick={(e)=>{handleDeleteUser(item.id)}}>
                                        <i className="fa-solid fa-trash"></i>
                                        
                                    </span>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                            </table>
                        </div>
                :
                <div>No Users Yet</div>
            }
            </div>
        </>
    )
}
export default AdminUsers;