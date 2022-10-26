import { RememberListContext } from '../GlobalContext/RememberListContext';
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import RememberForm from "./RememberForm"
import NewRemItem from "./NewRemItem"
// import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



function NewRememberList({user, tagList, setTagList, setUserList, userList, newRemembers, setNewRemembers, value, setValue, isPrivate, setIsPrivate, addRemember, handleSubmit, myNewRemember }) {
    // const [newRemembers, setNewRemembers] = useState("")
    // const [myNewRemember, setMyNewRemember] = useState("")
    // const [value, setValue] = useState("");
    // const [isPrivate, setIsPrivate] = useState(false)

    const { rememberList, updateRememberList } = useContext(RememberListContext);

    let history = useHistory()

    // const addRemember = text => {
    //     let brandNewRemember = 
    //     {user_id: user.id, 
    //     text: text, 
    //     set_to_private: false}

    //     setNewRemembers([...newRemembers, brandNewRemember]);
    // };



    // const handleSubmit = e => {
    //     e.preventDefault()
    //     addRemember(value)

    //     fetch(`http://localhost:4000/remembers`, {
    //       method: "POST",
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         user_id: user.id,
    //         set_to_private: isPrivate,
    //         text: value 
    //       })
    //     })
    //     .then(res => res.json())
    //     .then(data => setMyNewRemember(data))

    //     // .then(data => (updateRememberList([...myNewRemember, data])))


    //       fetch("http://localhost:4000/users")
    //       .then(res => res.json())
    //       .then(setUserList)

    //       setValue("")
    //       setIsPrivate(false)
    // }

            const handleNavClick = () => {
                history.push('/classroom-writing')
            }

    return(

            <div> 
                <Typography variant="h6" gutterBottom>
                    In the field below, begin a sentence with the words "I remember..." and write out a memory. Click the submit button. If you like, you can click the "set to private" checkbox. Add tags from the list of tags below. If you don't see the one you like, click "Create Tag" and it will appear at the end of the list. The write another "I remember..." and another....
                     
                </Typography>

            {/* <button onClick={handleNavClick}>Check out your work</button> */}
         
            <RememberForm addRemember={addRemember} 
            user={user} 
            handleSubmit={handleSubmit} 
            value={value} 
            setValue={setValue} 
            isPrivate={isPrivate} 
            setIsPrivate={setIsPrivate} 
            myNewRemember={myNewRemember} 
            setUserList={setUserList} 
            userList={userList}/>
           
            <div className="left-column">
                <div className="remember-container">
                <ul className="remember-list"></ul>
                    {newRemembers ?  newRemembers.map(remember => <NewRemItem  
                    id={remember.id} 
                    text={remember.text} 
                    tagList={tagList} 
                    setTagList={setTagList}
                    myNewRemember={myNewRemember}
                    setUserList={setUserList}
                
                    /> ) : null}

                </div>

            </div>
            <div className="right-column">
            <Typography variant="h5" gutterBottom>
                    When you finish, check out your class's writing!
                </Typography>
          <Button variant="contained" color="secondary" onClick={handleNavClick}>Classroom Writing </Button>
                 {/* <Typography variant="h6" gutterBottom>
                         [Instructions]
                </Typography> */}

            </div>
           
            
        </div>

    )
}

export default NewRememberList