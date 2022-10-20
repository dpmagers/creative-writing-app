// import { UserContext, UserProvider } from './GlobalContext/UserProvider';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import About from "./components/About"
import NewRememberList from "./components/NewRememberList"
import UsersContainer from "./components/UsersContainer"


// export const NameContext = React.createContext()

function App() {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState("/")
  const [rememberList, setRememberList] = useState("")
  const [tagList, setTagList] = useState("")
  const [userList, setUserList] = useState("")


    // const { user, setUser } = useContext(UserContext);

    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user)
          });
        }
      });
    }, []);

    useEffect(() => {
      fetch("http://localhost:4000/tags")
      .then(res => res.json())
      .then(setTagList)
      }, [])

    useEffect(() => {
        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(setUserList)

    }, [])
    // .then(data => console.log(data))




  return (
    <BrowserRouter>
      <NavBar onChangePage={setPage} setUser={setUser} user={user} />
      <div className="App">
        <Switch>
          <Route path="/about">
            <About user={user}/>
          </Route>
          <Route path="/new-writing">
            <NewRememberList user={user} tagList={tagList} setTagList={setTagList} />
          </Route>
          <Route path="/classroom-writing">
            <UsersContainer user={user} userList={userList} setUserList={setUserList}/> 
          </Route>
          <Route path="/login">
            <LoginForm user={user} setUser={setUser}/>
          </Route>
          <Route path="/signup">
            <SignupForm user={user} setUser={setUser}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
