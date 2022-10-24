import { RememberListContext } from '../GlobalContext/RememberListContext';
import { useState, useEffect, useContext } from "react";


function TagFormDetail({tag, tagList, myNewRemember, setUserList}) {
    // state for checkbox value
    const [addTag, setAddTag] = useState(false) 
    const [rememberTagList, setRememberTagList] = useState([])


    const { rememberList, updateRememberList } = useContext(RememberListContext);


    console.log(rememberTagList, "hello")


    // const addRememberTag = id => {
    //     // let brandNewRememberTag = 
    //     // {remember_id: myNewRemember.id, 
    //     // tag_id: tag.id} 
        
    //     setRememberTagList([...rememberTagList, brandNewRememberTag]);
    //     };
        
    const handleRememberTagSubmit = e => {
    e.preventDefault()

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
    .then(data => setRememberTagList([...rememberTagList, data]))
    // .then(data => console.log(data))

    fetch("http://localhost:4000/users")
    .then(res => res.json())
    .then(setUserList)

    setRememberTagList("")
    console.log(rememberTagList)

    }

    // .then(data => setRememberTagList([...rememberTagList, data]))
// STATE FOR YOUR TAGS SHOULD LIVE WHERE THE UPDATE AND DELETE TAGS ARE LIVING LINE 39 SHOULD LIVE AS STATE
// WHERE I'M DOING UPDATE AND DELETE ; THIS INFO SHOULD BE PUT IN A FUNCTION THAT CAN BE CALLED 



    return (
        <form onSubmit={handleRememberTagSubmit}>
            <label htmlFor="tag-name">{tag.name}</label>

            <button type="submit">Submit Tag</button>
        </form>
    )
}

export default TagFormDetail