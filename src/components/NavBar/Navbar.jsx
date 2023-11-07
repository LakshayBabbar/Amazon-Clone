import { Fragment } from "react";
import logo from "../../assets/amazon.png";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import ListBar from './ListBar';
import {AiOutlineUser} from 'react-icons/ai';

function navbar() {
  return (
    <Fragment>
    <div className="nav-wrapper">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <div className="top-bar">
          <a href="/">Sign in &gt;</a>
          <a><AiOutlineUser style={{ color: "#fff", fontSize: "2rem",marginRight: "1rem" }}/></a>
          <FiShoppingCart style={{ color: "#fff", fontSize: "2rem" }} />
          
        </div>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search Amazon" />
        <div className="icon-box">
          <AiOutlineSearch style={{ color: "#0f1111", fontSize: "1.5rem" }} />
        </div>
      </div>
      <div className="right-wrapper">
        <div className="text">
          <a href="/">Hello, sign in</a>
          <a href="/" style={{fontSize: "17px"}}>Account & Lists</a>
        </div>
        <div className="cart">
          <FiShoppingCart style={{ color: "#fff", fontSize: "2.5rem" }} />
          <a href="/">Cart</a>
        </div>
      </div>
      </div>
      <ListBar />
    </Fragment>
  );
}

export default navbar;
