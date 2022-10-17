import React, {useState} from 'react'

function RememberForm({addRemember, text, user}) {
    const [value, setValue] = useState("");
    const [isPrivate, setIsPrivate] = useState(false)


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

    }
    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <textarea
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
                />

                <label htmlFor="set-to-private">Set to Private</label>
                <input 
                    type="checkbox"
                    id="set-to-private"
                    checked={isPrivate}
                    onChange={(e) => setIsPrivate(e.target.checked)}
                />
                
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default RememberForm