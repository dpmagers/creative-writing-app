import React, {useState} from 'react'
import RememberForm from "./RememberForm"
import NewRemItem from "./NewRemItem"


function NewRememberList({user}) {
    const [newRemembers, setNewRemembers] = useState("")

    // create new objec
    // so I need to create object before I add to the spread operator 




    const addRemember = text => {
        let brandNewRemember = 
        {user_id: user.id, 
        text: text, 
        set_to_private: false}

        setNewRemembers([...newRemembers, brandNewRemember]);
      };
    // console.log(brandNewRemember)
    return(

            <div> 
            <h1>Create New Writing Here</h1>
            <RememberForm addRemember={addRemember} user={user} />
            <div className="left-column">
                <div className="remember-container">
                <ul className="remember-list"></ul>
                    {newRemembers ?  newRemembers.map(remember => <NewRemItem  id={remember.id} text={remember.text} 
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