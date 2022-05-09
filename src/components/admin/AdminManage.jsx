import { useEffect,useState } from "react"
import axios from '../../axios'
import {Link} from 'react-router-dom'
import {imgUrl} from '../../api/api'
import AdminGenres from "./AdminGenres"
import AdminBooks from "./AdminBooks"
import AdminOrders from "./AdminOrders"
import AdminUsers from "./AdminUsers"
const AdminManage = () =>{
    return(
        <>
        <AdminGenres/>
        <AdminBooks/>
        <AdminOrders/>
        <AdminUsers/>
        </>
    )
}

export default AdminManage;