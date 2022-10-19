import React, {useState} from 'react'

function TagFormDetail({tag, tagList, myNewRemember}) {
    // state for checkbox value
    const [addTag, setAddTag] = useState(false) 
    const [rememberTagList, setRememberTagList] = useState("")

console.log(myNewRemember)



const addRememberTag = id => {
    let brandNewRememberTag = 
    {remember_id: myNewRemember.id, 
    tag_id: tag.id} 
    
    setRememberTagList([...rememberTagList, brandNewRememberTag]);
    };
    
    
    const handleRememberTagSubmit = e => {
    e.preventDefault()
    addRememberTag(addTag)
    
    fetch(`http://localhost:4000/remember_tags`, {
    method: "POST",
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    remember_id: myNewRemember.id,
    tag_id: tag.id,
    })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
    setRememberTagList(false)
    
    }




    return (
        <form onSubmit={handleRememberTagSubmit}>
            <label htmlFor="tag-name">{tag.name}</label>
            <input 
                type="checkbox"
                id="tag-name"
                checked={addTag}
                onChange={(e) => setAddTag(e.target.checked)}
            />
            <button type="submit">Submit Tag</button>
        </form>
    )
}

export default TagFormDetail