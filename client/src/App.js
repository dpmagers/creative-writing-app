import './App.css';
import { RememberListContext } from './GlobalContext/RememberListContext';
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route, useHistory, } from "react-router-dom";
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import About from "./components/About"
import NewRememberList from "./components/NewRememberList"
import UsersContainer from "./components/UsersContainer"
import Home from "./components/Home"
import {useStudentRemembers} from "./GlobalContext/StudentRemembersContext"
import { RememberTagListContext } from './GlobalContext/RememberTagListContext';
import Typography from '@mui/material/Typography';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fefefe"
      }
    }

  })


  const { studentRemembers, updateStudentRemembers} = useStudentRemembers()
  const { rememberTagList, updateRememberTagList } = useContext(RememberTagListContext);

  const [user, setUser] = useState(null)
  const [page, setPage] = useState("/")
  const [tagList, setTagList] = useState([])
  const [userList, setUserList] = useState([])
  const [errorList, setErrorList] = useState([])
  
  const [value, setValue] = useState("")
  const [isPrivate, setIsPrivate] = useState(false)
  const [newRemembers, setNewRemembers] = useState("")
  const [myNewRemember, setMyNewRemember] = useState("")

  const { rememberList, updateRememberList } = useContext(RememberListContext);

  let history = useHistory()


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
      console.log(myNewRemember)



        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(setUserList)

        setValue("")
        setIsPrivate(false)
  }



 

    // DELETE REMEMBER
  const deleteRemember = (e) => {
    fetch(`http://localhost:4000/remembers/${e}`, {
      method: "DELETE",
    })
      .then((res) => {const data = studentRemembers.filter(i => i.id !== e)
              console.log(data)
              console.log(res)
        updateStudentRemembers(data)

        })

        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(setUserList)
  }


      // PATCH REMEMBER
  const handleUpdatedRemember = (updatedRemember) => {
    console.log(updatedRemember)
    let updatedRememberList = studentRemembers.map(remember => {
      if (remember.id !== updatedRemember.id) {
        return remember
      } else 
        return updatedRemember
    })
      updateStudentRemembers(updatedRememberList)
  }

    const editRemember = (remember, rememberinput) => {


      fetch(`http://localhost:4000/remembers/${remember.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(rememberinput),
      })
      .then((resp) => resp.json())
      // .then(data => updateStudentRemembers([...studentRemembers, data]))
      .then(updatedRemember => handleUpdatedRemember(updatedRemember))
      // console.log(resp)
      // want to filter out the rememberList array and remove the stale version (finding the identical id with the updated remember). if id.updated === identical.id ; return updated remmeber in its place

      fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(setUserList)
      // console.log(userList)
      
    }

    // .then(data => updateStudentRemembers([...studentRemembers, data]))
// post 


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter forceRefresh>

      <NavBar onChangePage={setPage} setUser={setUser} user={user} />
      <div className="App">
      <header>
        {/* <h1 className="sitehead">I Remember: A Creative Writing App</h1> */}
          <Typography variant="h2" gutterBottom>
                    I Remember: A Creative Writing App
          </Typography>
      </header>
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
    </ThemeProvider>

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


            //   if (res.status > 300) {
      //     setErrorList([...errorList, {message: "delete unauthorized", id: e}])
      //     console.log(errorList)
      //   }
      // }).catch((error) => {
      //     console.log("this is", error)

        //   updatedRememberList.push(updatedRemember)
  //     remember.id !== updatedRemember.id
  //   updatedRememberList.push(updatedRemember)
  //   updateRememberList(updatedRememberList)
  // }



  // material ui theme attempts
        // spacing: {
    //   margin: 50
    // }
    // typography: {
    //   p: 50
    // }
      //   sx={m: 3}},
      // }}
  

          // spacing: {
      //   m: 500,


     // typography: {
    //   li: {
    //     fontSize: "1.25rem"
    //   }
    // }