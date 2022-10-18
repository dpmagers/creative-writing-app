import React, {useState} from 'react'
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


    return (
            user ? (<nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
      <NavLink to="/new-writing"> 
        New Writing 
      </NavLink>
      <button onClick={handleLogoutClick}>Logout</button>
    </nav> ) :
    (<nav>
    <NavLink exact to="/">
        Home
      </NavLink>
        <NavLink exact to="/login">
            Log In
        </NavLink>
        <NavLink exact to="/signup">
        Signup
      </NavLink>
    </nav>)
    
    
    
    
    
    // <nav>
    //   {!user ? (
    //     <div>
    //       <NavLink exact to="/">
    //         Home
    //       </NavLink>
    //       <NavLink exact to="/login">
    //         Login
    //       </NavLink>
    //       <NavLink exact to="/signup">
    //         Sign up
    //       </NavLink>

    //     </div>
    //   ) : (
    //     <div>
    //       <NavLink exact to="/">
    //         Home
    //       </NavLink>
    //       <NavLink exact to="/about">
    //         About
    //       </NavLink>
    //       <NavLink onClick={handleLogoutClick} exact to="/">
    //         Logout
    //       </NavLink>
    //     </div>
    //   )}
    // </nav>
  );

//   return (
//     user ? (<nav>
//       <NavLink exact to="/">
//         Home
//       </NavLink>
//       <NavLink exact to="/dailybehavior">
//         Daily Behavior
//       </NavLink>
//       <NavLink exact to="/studentprofiles">
//         Student Profiles
//       </NavLink>
//       <NavLink exact to="/addnote">
//         Add Note
//       </NavLink>
//       <NavLink exact to="/account">
//         Account
//       </NavLink>
//       <button onClick={handleLogoutClick}>Logout</button>
//     </nav> ) :
//     (<nav>
//     <NavLink exact to="/">
//         Home
//       </NavLink>
//         <NavLink exact to="/login">
//             Log In
//         </NavLink>
//         <NavLink exact to="/signup">
//         Signup
//       </NavLink>
//     </nav>)







    // return(
    //     <div className="navbar">
    //         <NavLink exact to ="/"> Home </NavLink>
    //         <NavLink to="/about"> About </NavLink>
    //         <NavLink to="/login"> Login </NavLink>
    //         <NavLink to="/signup"> Signup </NavLink>
    //         {/* <NavLink to="/new-writing"> New Writing </NavLink>
    //         <NavLink to="/classroom-writing"> Classroom Writing </NavLink> */}

    //     <button onClick={handleLogoutClick}>
    //       Logout
    //     </button>
    //     </div>
    // )

}

// return (
//     <nav>
//       {!user ? (
//         <div>
//           <NavLink exact to="/">
//             Home
//           </NavLink>
//           <NavLink exact to="/login">
//             Login
//           </NavLink>
//           <NavLink exact to="/signup">
//             Sign up
//           </NavLink>
//         </div>
//       ) : (
//         <div>
//           <NavLink exact to="/">
//             Home
//           </NavLink>
//           <NavLink onClick={handleLogoutClick} exact to="/">
//             Logout
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );







export default NavBar