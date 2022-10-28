import React, {useState} from 'react'
import Button from '@mui/material/Button';


function CreateTag({tagList, setTagList, setUserList} ) {

    const [createTag, setCreateTag] = useState("")

  
    // POST TAGS (TO tagList)
    const handleTagSubmit = e => {
        e.preventDefault()
        console.log("hello")
        // addCreateTag(createTag)

        fetch(`http://localhost:4000/tags`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: createTag
          })
        })
        .then(res => res.json())
        .then(data => setTagList([...tagList, data]))
        setCreateTag("")

        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(setUserList)
    }

    // pass the object itself into the setTagList instead of the piece of state

    return (
        <div>
            <form onSubmit={handleTagSubmit}>
                <label htmlFor="create-tag">Don't See Your Tag? Add It Here</label>
                <input 
                type="text"
                id="create-tag"
                value={createTag}
                onChange={(e) => setCreateTag(e.target.value)}
            />
            {/* <button type="submit">Create Tag</button> */}
            <Button type="submit" variant="contained" color="secondary" > Create Tag </Button>

            </form>

        </div>
    )
}

export default CreateTag