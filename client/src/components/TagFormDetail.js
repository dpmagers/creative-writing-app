import { RememberListContext } from '../GlobalContext/RememberListContext';
import { useState, useEffect, useContext } from "react";


function TagFormDetail({tag, tagList, myNewRemember, setUserList, currentRememberId, setCurrentRememberId, rememberTags}) {
    // state for checkbox value
    const [addTag, setAddTag] = useState(false) 
    const [rememberTagList, setRememberTagList] = useState([])


    const { rememberList, updateRememberList } = useContext(RememberListContext);

    // const addRememberTag = id => {
    //     // let brandNewRememberTag = 
    //     // {remember_id: myNewRemember.id, 
    //     // tag_id: tag.id} 
        
    //     setRememberTagList([...rememberTagList, brandNewRememberTag]);
    //     };
        

    const handleRememberTagSubmit = e => {
    e.preventDefault()

    let rememberIdToSubmit 
        if (myNewRemember?.id) {
            rememberIdToSubmit = myNewRemember.id
        }
        else {
            rememberIdToSubmit = currentRememberId
        }
        console.log(currentRememberId, "currentRememberId")

    fetch(`http://localhost:4000/remember_tags`, {
    method: "POST",
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    remember_id: rememberIdToSubmit,
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


    const isTagIncluded = !!rememberTags?.find(t => t.tag_id === tag.id) || false
    console.log("==========================")
    console.log(isTagIncluded, "isTagIncluded")

    console.log(rememberTags, "rememberTags")
    console.log(tag, "tag")


    // .then(data => setRememberTagList([...rememberTagList, data]))
// STATE FOR YOUR TAGS SHOULD LIVE WHERE THE UPDATE AND DELETE TAGS ARE LIVING LINE 39 SHOULD LIVE AS STATE
// WHERE I'M DOING UPDATE AND DELETE ; THIS INFO SHOULD BE PUT IN A FUNCTION THAT CAN BE CALLED 



    return (
        <form onSubmit={handleRememberTagSubmit}>
            <label htmlFor="tag-name">{tag.name}</label>

            {!isTagIncluded ? <button type="submit">Submit Tag</button> : null }
        </form>
    )
}

export default TagFormDetail