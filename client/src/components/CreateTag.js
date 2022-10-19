import React, {useState} from 'react'

function CreateTag({tagList, setTagList} ) {

    const [createTag, setCreateTag] = useState("")


    const addCreateTag = name => {
        let newTag = 
        {name: name}
        // createTag
        setTagList([...tagList, createTag]);
      };
      
    const handleTagSubmit = e => {
        e.preventDefault()
        console.log("hello")
        addCreateTag(createTag)

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
        .then(data => console.log(data))

        setCreateTag("")

    }

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
            <button type="submit">Create Tag</button>
            </form>

        </div>
    )
}

export default CreateTag