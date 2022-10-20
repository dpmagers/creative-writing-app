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
  const [errorList, setErrorList] = useState([])



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

    useEffect(() => {
      fetch("http://localhost:4000/remembers")
      .then(res => res.json())
      .then(setRememberList)
    }, [])

    // DELETE REMEMBER
  const deleteRemember = (e) => {
    fetch(`http://localhost:4000/remembers/${e}`, {
      method: "DELETE",
    })
      .then((res) => {const data = rememberList.filter(i => i.id !== e)
              console.log(data)
              console.log(res)
        setRememberList(data)
        if (res.status > 300) {
          setErrorList([...errorList, {message: "delete unauthorized", id: e}])
          console.log(errorList)
        }
      }).catch((error) => {
          console.log("this is", error)
        })
  }

  // // DELETE TAG
  const deleteTag = (e) => {
    fetch(`http://localhost:4000/tags/${e}`, {
      method: "DELETE",
    })
      .then((res) => {const data = tagList.filter(i => i.id !== e)
              console.log(data)
              console.log(res)
        setTagList(data)
        if (res.status > 300) {
          setErrorList([...errorList, {message: "delete unauthorized", id: e}])
          console.log(errorList)
        }
      }).catch((error) => {
          console.log("this is", error)
        })
  }



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
            <UsersContainer user={user} userList={userList} setUserList={setUserList} deleteRemember={deleteRemember} errorList={errorList} deleteTag={deleteTag}/> 
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
