import React, {useState, useEffect} from 'react'

function EditRemember ({remember=null, editRemember}) {

    const [formData, setFormData] = useState({
        // user_id:'',
        text:'',
        set_to_private: false
      })


      useEffect(() => {
        if (remember !=null) {
    
      setFormData({
        // user_id: remember.user_id,
        text: remember.text,
        set_to_private: remember.set_to_private
        })}
      },[])


      function handleSubmit(e){
        e.preventDefault()
        const rememberinput = {
        //   user_id: formData.user_id,
          text: formData.text,
          set_to_private: formData.set_to_private
        }
        editRemember(remember, rememberinput)
        console.log("helloooo")
      }

    //   console.log(editRemember)


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
