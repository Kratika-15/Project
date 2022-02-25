import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { logout, selectUser } from "../features/userSlice";
import {Navbar, Nav} from 'react-bootstrap';
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


  return (
    
<Navbar >
<Navbar>
      <Nav className='me-auto'>
      <Navbar.Brand className='Tag'><b> React-Redux </b> </Navbar.Brand>
        <p>&emsp; &emsp;</p>
        <Nav.Link className='link' href= "/home">Home</Nav.Link>
        <p>&emsp; &emsp;</p>
        <Nav.Link className='link' href= "/aboutus">About us</Nav.Link>
        <p>&emsp; &emsp;</p>
        <Nav.Link className='link' href= "/contact">Contact</Nav.Link>
        <p>&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
        <span>Hi, <span className="user__name">{user.name}</span>!</span>
        <p>&emsp; &emsp;</p>
        <button className="logout__button" onClick={()=> dispatch(logout())}>
        Logout
        </button>
        </Nav> 
        </Navbar>
        <Navbar>
        <Nav className="me2-auto">
        <p>&emsp; &emsp;</p>
        <button className="order_button">Order</button>
        <p>&emsp; &emsp;</p>
        <button className="order_button">Create New Order</button>
        </Nav>
      </Navbar>
    </Navbar>  
  );
};

export default Home;
