import { RememberListContext } from './GlobalContext/RememberListContext';
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import About from "./components/About"
import NewRememberList from "./components/NewRememberList"
import UsersContainer from "./components/UsersContainer"
import Home from "./components/Home"



function App() {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState("/")
  // const [rememberList, setRememberList] = useState("")
  const [tagList, setTagList] = useState([])
  const [userList, setUserList] = useState([])
  const [errorList, setErrorList] = useState([])
  const [rememberTagList, setRememberTagList] = useState([])
  
  const [newRemembers, setNewRemembers] = useState("")
  const [value, setValue] = useState("")
  const [isPrivate, setIsPrivate] = useState(false)
  const [myNewRemember, setMyNewRemember] = useState("")

  let history = useHistory()



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

    // console.log(userList)



    // POST REMEMBER 
    const addRemember = text => {
      let brandNewRemember = 
      {user_id: user.id, 
      text: text, 
      set_to_private: false}

      setNewRemembers([...newRemembers, brandNewRemember]);
  };

  const handleSubmit = e => {
      e.preventDefault()
      addRemember(value)

      fetch(`http://localhost:4000/remembers`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: user.id,
          set_to_private: isPrivate,
          text: value 
        })
      })
      .then(res => res.json())
      .then(data => setMyNewRemember(data))

      // .then(data => (updateRememberList([...myNewRemember, data])))


        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(setUserList)

        setValue("")
        setIsPrivate(false)
  }

// POST REMEMBERTAG
  // const addRememberTag = id => {
  //   let brandNewRememberTag = 
  //   {remember_id: myNewRemember.id, 
  //   tag_id: tag.id} 
    
  //   setRememberTagList([...rememberTagList, brandNewRememberTag]);
  //   };
    
  // const handleRememberTagSubmit = e => {
  // e.preventDefault()
  // // addRememberTag()

  // fetch(`http://localhost:4000/remember_tags`, {
  // method: "POST",
  // headers: {
  // 'Content-Type': 'application/json'
  // },
  // body: JSON.stringify({
  // remember_id: myNewRemember.id,
  // tag_id: tag.id,
  // })
  // })
  // .then(res => res.json())
  // .then(data => setRememberTagList(data))
  // // .then(data => console.log(data))

  // fetch("http://localhost:4000/users")
  // .then(res => res.json())
  // .then(setUserList)

  // setRememberTagList("")

  // }










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
        history.push('/about')
      });

      fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(setUserList)
      console.log(userList)
      
    }


  return (
    <BrowserRouter>
      <NavBar onChangePage={setPage} setUser={setUser} user={user} />
      <div className="App">
      <header><h1 className="sitehead">I Remember: A Creative Writing App</h1></header>
        <Switch>
          <Route path="/about">
            <About user={user}/>
          </Route>
          <Route path="/new-writing">
            <NewRememberList user={user} 
            tagList={tagList} 
            setTagList={setTagList} 
            setUserList={setUserList} 
            newRemembers={newRemembers} 
            setNewRemembers={setNewRemembers}
            value={value} 
            setValue={setValue}
            isPrivate={isPrivate} 
            setIsPrivate={setIsPrivate}
            myNewRemember={myNewRemember} 
            setMyNewRemember={setMyNewRemember}
            addRemember={addRemember}
            handleSubmit={handleSubmit}  />
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
