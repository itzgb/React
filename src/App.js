import Navbar from './components/Navbar';
import Signup from './components/Signup';
import SignupTest from './components/SignupTest';
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
import AccessDenied from './components/AccessDenied';
import PageNotFound from './components/PageNotFound';
import SellerLayout from './components/seller/SellerLayout';
import SellerGenre from './components/seller/SellerGenre';
import SellerBook from './components/seller/SellerBook';
import SellerOrder from './components/seller/SellerOrder';
import HomePage from './components/HomePage/HomePage';
import UserSignUp from './components/signup/UserSignUp';
import SellerSignUp from './components/signup/SellerSignUp';

const App = () => {
  
  return (
  
      
      <Routes>
        <Route path="/" element={<Layout />}>        
        {/* public */}        
        <Route path="signup" element={<SignupTest user={"user"} key={"user"}/>} />
        <Route path="signupd" element={<UserSignUp />} />
        <Route path="/seller/signup" element={<SellerSignUp />} />
        {/* <Route path="/seller/signup" element={<SignupTest user={"seller"} key={"seller"}/>} /> */}
        <Route path="login" element={<Login />} />
        <Route path="/AccessDenied" element={<AccessDenied />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/genre/:id" element={<Books />} />
        <Route path="/book/:id" element={<SingleBook />} />
        
          {/* user */}
          <Route element={<ProtectedRoute token={getToken} user={["USER","SELLER","ADMIN"]}/>}> 
            <Route path="/logout" element={ <Logout /> } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/order" element={<Order />} />
          </Route>
          {/*seller*/}
          <Route element={<ProtectedRoute token={getToken} user={["SELLER","ADMIN"]}/>}>
            <Route path="/seller" element={<SellerLayout />} >
              <Route path="manage" element={<SellerManage />} />
              <Route path="addBook" element={<AddBook />} />
              <Route path="addGenre" element={<AddGenre />} />
              <Route path="editBook/:id" element={<AddBook />} />
              <Route path="genres" element={<SellerGenre />} />
              <Route path="books" element={<SellerBook />} />
              <Route path="orders" element={<SellerOrder />} />
            </Route>
          </Route>
          <Route element={<ProtectedRoute token={getToken} user={["ADMIN"]}/>}>
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

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;