import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navber = () => {
  const {user, LogOut} = useContext(AuthContext)

  const handleLogOut = () => {
    LogOut()
    .then(() => {})
    .catch(error => console.log(error))
  }

  const links = <>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>
  {/* <li><NavLink to="/services">Services</NavLink></li>
  <li><NavLink to="/blog">Blog</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li> */}
  {
    user?.email? <>
    <li><Link to="/bookings">My Bookings</Link></li>
    <li><button onClick={handleLogOut}>Log Out</button></li>
    </>
   
    :<li><Link to="/login">Login</Link></li>
  }
  </>
    return (
        <div className="navbar bg-base-100 h-28 mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">
            <img src={logo}></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>
        </div>
      </div>
    );
};

export default Navber;