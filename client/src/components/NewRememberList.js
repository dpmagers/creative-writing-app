import { RememberListContext } from '../GlobalContext/RememberListContext';
import { useState, useEffect, useContext } from "react";
import RememberForm from "./RememberForm"
import NewRemItem from "./NewRemItem"

function NewRememberList({user, tagList, setTagList, setUserList, userList}) {
    const [newRemembers, setNewRemembers] = useState("")
    const [myNewRemember, setMyNewRemember] = useState("")
    const [value, setValue] = useState("");
    const [isPrivate, setIsPrivate] = useState(false)

    const { rememberList, updateRememberList } = useContext(RememberListContext);


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

    return(

            <div> 
            <h1>Create New Writing Here</h1>
            <RememberForm addRemember={addRemember} user={user} handleSubmit={handleSubmit} value={value} setValue={setValue} isPrivate={isPrivate} setIsPrivate={setIsPrivate} myNewRemember={myNewRemember} setUserList={setUserList} userList={userList}/>
           
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
                 <p>[Instructions]</p>
            </div>
           
            
        </div>

    )
}

export default NewRememberList