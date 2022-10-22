import { RememberListContext } from './GlobalContext/RememberListContext';
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import About from "./components/About"
import NewRememberList from "./components/NewRememberList"
import UsersContainer from "./components/UsersContainer"



function App() {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState("/")
  // const [rememberList, setRememberList] = useState("")
  const [tagList, setTagList] = useState([])
  const [userList, setUserList] = useState([])
  const [errorList, setErrorList] = useState([])
  const [rememberTagList, setRememberTagList] = useState([])


  const { rememberList, updateRememberList } = useContext(RememberListContext);

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
      .then(data => setTagList(data))
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
      .then(updateRememberList)
    }, [])

    console.log(userList)


    // DELETE REMEMBER
  const deleteRemember = (e) => {
    fetch(`http://localhost:4000/remembers/${e}`, {
      method: "DELETE",
    })
      .then((res) => {const data = rememberList.filter(i => i.id !== e)
              console.log(data)
              console.log(res)
        updateRememberList(data)
        if (res.status > 300) {
          setErrorList([...errorList, {message: "delete unauthorized", id: e}])
          console.log(errorList)
        }
      }).catch((error) => {
          console.log("this is", error)
        })

        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(setUserList)
  }

  // // DELETE TAG
  const deleteTag = (e) => {
    fetch(`http://localhost:4000/remember_tags/${e}`, {
      method: "DELETE",
    })
      .then((res) => {const data = rememberTagList.filter(i => i.id !== e)
              console.log(data)
              console.log(res)
        setRememberTagList(data)
        if (res.status > 300) {
          setErrorList([...errorList, {message: "delete unauthorized", id: e}])
          console.log(errorList)
        }
      }).catch((error) => {
          console.log("this is", error)
        })

        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(setUserList)
  }

    // PATCH REMEMBER
    const editRemember = (remember, rememberinput) => {
      console.log("hello")
  
      updateRememberList(rememberList => rememberList.map(originalRemember => {
            if (originalRemember.id === remember.id) {
              return remember;
            } else {
              return originalRemember;
            }
          }))
          console.log(remember)
          console.log(rememberinput)
      fetch(`http://localhost:4000/remembers/${remember.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(rememberinput),
      })
      .then((resp) => {
        if (resp.status > 300) {
          setErrorList([...errorList, {message: "update unauthorized", id: remember.id}])
          console.log(errorList)
        }
        resp.json()
      })
      .then((updatedRemember) => {
        updateRememberList([...rememberList, updatedRemember]);
      });

      fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(setUserList)
  
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
            <NewRememberList user={user} tagList={tagList} setTagList={setTagList} setUserList={setUserList}  />
          </Route>
          <Route path="/classroom-writing">
            <UsersContainer user={user} userList={userList} setUserList={setUserList} deleteRemember={deleteRemember} errorList={errorList} deleteTag={deleteTag} editRemember={editRemember}/> 
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
