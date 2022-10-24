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
  // STATE for the entire set of tags in database
  const [userList, setUserList] = useState([])
  // STATE for the entire set of users in database
  const [errorList, setErrorList] = useState([])
  const [rememberTagList, setRememberTagList] = useState([])
  
  const [value, setValue] = useState("")
  const [isPrivate, setIsPrivate] = useState(false)
  const [newRemembers, setNewRemembers] = useState("")
  // newRemembers is the STATE I created for the ARRAY of objects I am creating on the '/new-writing' client route. newRemembers is added to the full list of existing backend Remembers. 
  const [myNewRemember, setMyNewRemember] = useState("")
    // myNewRemember is the STATE I created for the new Remember OBJECT
    // i'm using myNewRemember.id as the value of the object I am stringifying in my RememberTag post in TagFormDetail 


  let history = useHistory()


  const { rememberList, updateRememberList } = useContext(RememberListContext);
      // rememberList is the CONTEXT I created for the entire list of Remembers


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



    // POST REMEMBER 
    const addRemember = text => {
      let brandNewRemember = 
      {user_id: user.id, 
      text: text, 
      set_to_private: false}

      setNewRemembers([...newRemembers, brandNewRemember]);
  };
    // addRemember is the FUNCTION that creates an object for the post and pushes a new object into the backend 
    // let brandNewRemember is the created OBJECT that is being pushed to newRemembers
    // newRemembers is the STATE I created for the ARRAY of objects I am creating on the '/new-writing' client route. newRemembers is added to the full list of existing backend Remembers. 
    // myNewRemember is the STATE I created for the new Remember OBJECT
    // i'm using myNewRemember.id as the value of the object I am stringifying in my RememberTag post in TagFormDetail 

    // if I set a piece of state that sets the fullRemembers list, I won't have to refetch /Users and hope async issues come up (I think)

  const handleSubmit = e => {
      e.preventDefault()
      addRemember(value)
      // addRemember(value) populates /new-writing route w/new Remember. The parameter (value/text) is the text that is put on the /new-writing route 

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
      // updateRememberList(newRemembers)
      // have this idea to set this at context but need some guidance
      console.log(myNewRemember)



        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(setUserList)

        setValue("")
        setIsPrivate(false)
  }



  // console.log(rememberList)


    // DELETE REMEMBER
  const deleteRemember = (e) => {
    fetch(`http://localhost:4000/remembers/${e}`, {
      method: "DELETE",
    })
      .then((res) => {const data = rememberList.filter(i => i.id !== e)
              console.log(data)
              console.log(res)
        updateRememberList(data)
      //   if (res.status > 300) {
      //     setErrorList([...errorList, {message: "delete unauthorized", id: e}])
      //     console.log(errorList)
      //   }
      // }).catch((error) => {
      //     console.log("this is", error)
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
        })

        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(setUserList)
  }




      // PATCH REMEMBER
  const handleUpdatedRemember = (updatedRemember) => {
    console.log(updatedRemember)
    let updatedRememberList = rememberList.filter(remember => remember.id !== updatedRemember.id)
    updatedRememberList.push(updatedRemember)
    updateRememberList(updatedRememberList)
  }

    const editRemember = (remember, rememberinput) => {
      console.log("hello")
          console.log(remember)
          console.log(rememberinput)

      fetch(`http://localhost:4000/remembers/${remember.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(rememberinput),
      })
      .then((resp) => resp.json())
      .then(updatedRemember => handleUpdatedRemember(updatedRemember))
      // want to filter out the rememberList array and remove the stale version (finding the identical id with the updated remember). if id.updated === identical.id ; return updated remmeber in its place

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
            <UsersContainer 
            user={user} 
            userList={userList} 
            setUserList={setUserList} 
            deleteRemember={deleteRemember} 
            errorList={errorList} 
            deleteTag={deleteTag} 
            editRemember={editRemember}
            tagList={tagList}
            setTagList={setTagList}
            myNewRemember={myNewRemember}
            setMyNewRemember={setMyNewRemember}

            /> 
            
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


        // if (resp.status > 300) {
        //   setErrorList([...errorList, {message: "update unauthorized", id: remember.id}])
        //   console.log(errorList)
        // }
        // resp.json()

              //   if (res.status > 300) {
      //     setErrorList([...errorList, {message: "delete unauthorized", id: e}])
      //     console.log(errorList)
      //   }
      // }).catch((error) => {
      //     console.log("this is", error)
