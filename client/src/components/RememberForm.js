import React, {useState} from 'react'
import TextField from '@mui/material/Button';
import Button from '@mui/material/Button';


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
                
                {/* <button type="submit">Submit</button> */}
                <Button type="submit" variant="contained" color="secondary">Submit </Button>

            </form>




        </div>
    )
}

export default RememberForm




                           {/* <TextField id="filled-basic" 
                    label="Filled" 
                    variant="filled" 
                    type="text"
                    className="input"
                    size="large"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}


