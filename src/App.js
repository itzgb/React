import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/Protected';
import { getToken }   from './auth/auth';
import  Logout  from './components/Logout';
import Genre from './components/books/Genre';
import Books from './components/books/Books';
import SingleBook from './components/books/SingleBook';
import Cart from './components/cart/Cart';
import Order from './components/orders/Order'
import SellerManage from './components/seller/SellerManage';
import AddBook from './components/seller/AddBook';
import AddGenre from './components/seller/AddGenre';
import PaymentSuccess from './components/payment/PaymentSuccess';
import AdminManage from './components/admin/AdminManage';
import AdminLayout from './components/admin/AdminLayout';
import AdminOrders from './components/admin/AdminOrders';
import AdminBooks from './components/admin/AdminBooks';
import AdminGenres from './components/admin/AdminGenres';
import AdminUsers from './components/admin/AdminUsers';
import { useState } from 'react';
import AddUser from './components/admin/AddUser';
const App = () => {
  const isLoggedIn = (bool) =>{
    setAuth(bool);
  }
  const [auth,setAuth] = useState(false);
  return (
    
    <><Navbar auth={auth}  ></Navbar>
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route path="signup" element={<Signup user={"user"}/>} />
        <Route path="/seller/signup" element={<Signup user={"seller"}/>} />
        <Route path="login" element={<Login status={isLoggedIn}/>} />
  
        <Route element={<ProtectedRoute token={getToken}/>}> 
          <Route path="/logout" element={ <Logout /> } />
          <Route path="/" element={<Home />} />

          {/*seller*/}
          <Route path="/seller/manage" element={<SellerManage />} />
          <Route path="/seller/addBook" element={<AddBook />} />
          <Route path="/seller/addGenre" element={<AddGenre />} />
          <Route path="/seller/editBook/:id" element={<AddBook />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/order" element={<Order />} />
          <Route path="/admin" element={<AdminLayout />} >
            <Route path="manage" element={<AdminManage />} />
            <Route path="orders" element={<AdminOrders/>} />
            <Route path="books" element={<AdminBooks />} />
            <Route path="genres" element={<AdminGenres />} />
            <Route path="users" element={<AdminUsers />} />

            <Route path="addBook" element={<AddBook />} />
            <Route path="addGenre" element={<AddGenre />} />
            <Route path="addUser" element={<AddUser />} />
          </Route>
        </Route>

        <Route path="/genre" element={<Genre />} />
        <Route path="/genre/:id" element={<Books />} />

        <Route path="/book/:id" element={<SingleBook />} />
        <Route path="/cart" element={<Cart />} />
        
      </Route>
    </Routes></>
  );
}

export default App;