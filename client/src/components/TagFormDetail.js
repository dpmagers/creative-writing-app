import { RememberListContext } from '../GlobalContext/RememberListContext';
import { useState, useEffect, useContext } from "react";


function TagFormDetail({tag, tagList, myNewRemember}) {
    // state for checkbox value
    // const [addTag, setAddTag] = useState(false) 
    const [rememberTagList, setRememberTagList] = useState("")


const { rememberList, updateRememberList } = useContext(RememberListContext);


console.log(myNewRemember, "hello")


const addRememberTag = id => {
    let brandNewRememberTag = 
    {remember_id: myNewRemember.id, 
    tag_id: tag.id} 
    
    setRememberTagList([...rememberTagList, brandNewRememberTag]);
    };
    
    
    const handleRememberTagSubmit = e => {
    e.preventDefault()
    // addRememberTag()
    
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
    .then(data => setRememberTagList(data))
    // .then(data => console.log(data))

    setRememberTagList(false)
    
    }




    return (
        <form onSubmit={handleRememberTagSubmit}>
            <label htmlFor="tag-name">{tag.name}</label>

            <button type="submit">Submit Tag</button>
        </form>
    )
}

export default TagFormDetail