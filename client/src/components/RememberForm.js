import React, {useState} from 'react'

function RememberForm({value, setValue,  isPrivate,  setIsPrivate, handleSubmit}) {

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