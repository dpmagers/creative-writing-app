import React, {useState, useEffect} from 'react'

function EditRemember ({remember, editRemember, setUserList, clickEdit, setClickEdit, userList}) {

    const [formData, setFormData] = useState({
        text: remember.text,
        set_to_private: remember.set_to_private
      })

      function handleSubmit(e){
        e.preventDefault()
        const rememberinput = {
          text: formData.text,
          set_to_private: formData.set_to_private
        }
        editRemember(remember, rememberinput)
        console.log("helloooo")
        setClickEdit(!clickEdit)
      }


    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <textarea
                type="text"
                className="input"
                value={formData.text}
                onChange={(e) => setFormData({...formData, text: e.target.value})}
                />

                <label htmlFor="set-to-private">Set to Private</label>
                <input 
                    type="checkbox"
                    id="set-to-private"
                    checked={formData.set_to_private}
                    onChange={(e) => setFormData({... formData, set_to_private: e.target.checked})}
                />
                
                <button type="submit">Submit Update</button>
            </form>

        </div>
    )
}

export default EditRemember








    // taking this out of useEffect gives "Too many rerenders error"
      // useEffect(() => {
      //   if (remember !=null) {
    
      // setFormData({
      //   // user_id: remember.user_id,
      //   text: remember.text,
      //   set_to_private: remember.set_to_private
      //   })}
      // },[])

      // is it because the useEffect stops a rerender of the form? 



        // remember=null 

  // WORKS FIRST TIME CLICKED, SOMETIMES WORKS MORE THAN ONCE
  // PERSISTS TO BACKEND BUT SOMETIMES DOESN'T RERENDER ON PAGE
  // BREAKS ON SECOND UPDATE (ALTHOUGH THAT SECOND UPDATE PERSISTS)
  // Uncaught TypeError: Cannot read properties of undefined (reading 'id')
  //   at App.js:174:1
  // if (originalRemember.id === remember.id) {

  // if clicked first time and it updates, if you click "Delete Remember", it gives a typeerror: this is TypeError: Cannot read properties of undefined (reading 'id'), but still deletes it

        // taking SetFormData out of the useEffect gives "Too many rerenders error"

          // holds onto remember.text but initial form can't read set_to_private boolean. Leaves it as "undefined". if clicked, it will turn true, but a "true" one will show as "undefined" on raising update form

