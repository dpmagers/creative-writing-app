import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"

import NavBar from "./components/NavBar"


function App() {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState("/")



  return (
    <BrowserRouter>
      <NavBar onChangePage={setPage} setUser={setUser} />
      <div className="App">
        <Switch>
          <Route path="/about">
            <h1>About Page</h1>
          </Route>
          <Route path="/login">
            <LoginForm user={user} setUser={setUser}/>
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
