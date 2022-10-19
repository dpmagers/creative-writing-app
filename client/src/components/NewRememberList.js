import React, {useState} from 'react'
import RememberForm from "./RememberForm"
import NewRemItem from "./NewRemItem"


function NewRememberList({user, tagList, setTagList}) {
    const [newRemembers, setNewRemembers] = useState("")
    const [myNewRemember, setMyNewRemember] = useState("")
    const [value, setValue] = useState("");
    const [isPrivate, setIsPrivate] = useState(false)

    // create new objec
    // so I need to create object before I add to the spread operator 



    const addRemember = text => {
        let brandNewRemember = 
        {user_id: user.id, 
        text: text, 
        set_to_private: false}

        setNewRemembers([...newRemembers, brandNewRemember]);
        setMyNewRemember(brandNewRemember)
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
        .then(data => console.log(data))

        setValue("")
        setIsPrivate(false)
        // setMyNewRemember(brandNewRemember)
    }

    console.log(myNewRemember)
    return(

            <div> 
            <h1>Create New Writing Here</h1>
            <RememberForm addRemember={addRemember} user={user}  tagList={tagList} setTagList={setTagList} myNewRemember={myNewRemember} handleSubmit={handleSubmit} value={value} setValue={setValue} isPrivate={isPrivate} setIsPrivate={setIsPrivate}/>
            <div className="left-column">
                <div className="remember-container">
                <ul className="remember-list"></ul>
                    {newRemembers ?  newRemembers.map(remember => <NewRemItem  
                    id={remember.id} 
                    text={remember.text} 
                    tagList={tagList} 
                    setTagList={setTagList}
                    myNewRemember={myNewRemember}
                
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