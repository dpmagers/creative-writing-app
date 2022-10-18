import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

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

        <button variant="fill" color="primary" type="submit">
          Login
        </button>

    </form>
    )
}

export default LoginForm;