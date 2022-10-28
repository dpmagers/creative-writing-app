import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'



function LoginForm({user, setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState() 
    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
  
        setUsername("")
        setPassword("")
  
        
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
              .then(res => {
                setIsLoading(false)
                if (res.ok) {
                    res.json()
            .then(user => setUser(user))
            history.push('/about');
              } else {
                  res.json()
                  .then(json => setError(json.error))
                  }
              })
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
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* <button variant="fill" color="primary" type="submit">
          Login
        </button> */}
        <Button variant="contained" color="secondary" type="submit">Login</Button>

        

    </form>
    </div>
    <Box
                    component="img"
                    sx={{
                    spacing: 5,
                    height: 460,
                    width: 300,
                    // maxHeight: { xs: 1500, md: 1350 },
                    // maxWidth: { xs: 150, md: 200 },
                    }}
                    alt="I Remember book cover."
                    src="https://m.media-amazon.com/images/I/71Npzl4Pl-L.jpg"
                />
      
      {/* <img className="homepage-img"
                src="https://m.media-amazon.com/images/I/71Npzl4Pl-L.jpg"
                width="300px" 
                height="460px"
            ></img> */}
      <h3>Please Login! If you do not have an account, click the Signup tab.</h3>
    </div>
    )
}

export default LoginForm;