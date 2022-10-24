import React, { useState } from "react";
import { useHistory } from "react-router-dom"


function SignupForm({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [fullName, setFullName] = useState("")
  const [classroomId, setClassroomId] = useState(0)
  const [isInstructor, setIsInstructor] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  let history = useHistory()

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    

    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        classroom_id: classroomId,
        full_name: fullName,
        is_instructor: isInstructor,
        admin: isAdmin
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push('/about');
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

    setErrors([]);
    setUsername("")
    setPassword("")
    setPasswordConfirmation("")
    setClassroomId(0)
    setFullName("")
    setIsInstructor(false)
    setIsAdmin(false)
  }


  return (

  <div className="login-page">
    <div className="login-form">
      <form onSubmit={handleSubmit}>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />


          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />


          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="classroom-id"> Classroom Id</label>
          <input
              type="number"
              id="classroom-id"
              min="1" 
              max="3"
              value={classroomId}
              onChange={(e) => setClassroomId(e.target.value)}
          />

          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label htmlFor="is-instructor">Is Instructor?</label>
          <input 
              type="checkbox"
              id="is-instructor"
              checked={isInstructor}
              onChange={(e) => setIsInstructor(e.target.checked)}
          />

          <label htmlFor="is-admin">Is Admin?</label>
          <input 
              type="checkbox"
              id="is-admin"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
          />
          
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

          {errors.map((err) => (
            <error key={err}>{err}</error>
          ))}

      </form>
      </div>
      
      <img className="homepage-img"
                src="https://m.media-amazon.com/images/I/71Npzl4Pl-L.jpg"
                width="300px" 
                height="460px"
            ></img>
      <h3>Sign up for an account here.</h3>
    </div>
    
  );
}

export default SignupForm;
