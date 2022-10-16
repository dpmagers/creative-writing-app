import React from 'react'
import { NavLink } from "react-router-dom"


function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch('/logout', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }


    // conditionally render home page display
    // if (!user) return <LoginForm />

    return(
        <div className="navbar">
            <NavLink exact to ="/"> Home </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/login"> Login </NavLink>
            <NavLink to="/signup"> Signup </NavLink>
            {/* <NavLink to="/new-writing"> New Writing </NavLink>
            <NavLink to="/classroom-writing"> Classroom Writing </NavLink> */}

        <button onClick={handleLogoutClick}>
          Logout
        </button>
        </div>
    )

}

export default NavBar