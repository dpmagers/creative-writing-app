import React, {useState, useContext, useEffect} from 'react'
import UserTagList from "./UserTagList"
import EditRemember from "./EditRemember"
import TagForm from "./TagForm"
import CreateTag from "./CreateTag"
import { TagsListRememberContext } from '../GlobalContext/TagsListRememberContext'
import Typography from '@mui/material/Typography';
import { ListItemText } from '@mui/material';
import Button from '@mui/material/Button';

function UserRemDetail ({remember, deleteRemember, errorList, user, deleteTag, editRemember, setUserList, student, userList, studentRemembers, tagList, setTagList, myNewRemember, setMyNewRemember, currentRememberId, setCurrentRememberId}) {
    const [clickEdit, setClickEdit] = useState(false)
    const [showTagUpdateList, setShowTagUpdateList] = useState(false)
    const [showTagCreate, setShowTagCreate] = useState(false)
    const [tagsForEachRemember, setTagsForEachRemember] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/tags/remember/${remember.id}`)
        .then(res => res.json())
        .then(data => {setTagsForEachRemember(data)
        console.log(data)})
        }, [])



        // delete "/tags/remember_tag/:remember_id/:tag_id", to: "remember_tags#delete_remember_tag"


          // DELETE Remember TAG
  const deleteRememberTag = (e) => {
    fetch(`http://localhost:4000/tags/remember_tag/${remember.id}/${e}`, {
      method: "DELETE",
    })
      .then((res) => {const data = tagsForEachRemember.filter(i => i.id !== e)
              console.log(data)
              console.log(res)
        setTagsForEachRemember(data)
        })

        // reset re

        // console.log(rememberTagList)
        // fetch("http://localhost:4000/users")
        // .then(res => res.json())
        // .then(setUserList)
  }

        // console.log(data)

    let tags

        let remember_tags
        let newObject

        const mergeById = (a1, a2) =>
        a1.map(itm => ({
            ...a2.find((item) => (item.tag_id === itm.id) && item),
            ...itm
        }));

        if (remember ) {
            tags = remember.tags
            remember_tags = remember.remember_tags
            remember_tags = remember_tags.map(rt => {
                rt['newId'] = rt.id
                return rt
            })
            newObject = mergeById(tags, remember_tags)
        }


        const handleClick = (remember) => {
            deleteRemember(remember.id)
        }

        const handleEditRemember = (remember) => {
            setClickEdit(!clickEdit)
        }


        const handleUpdateTags = (e) => {
            setShowTagUpdateList(!showTagUpdateList)
            setShowTagCreate(!showTagCreate)
            setCurrentRememberId(remember?.id)
        }

    return (
        <div>
            <hr />
            <ul className="student-remembers"></ul>
                <Typography variant="h6" gutterBottom>
                        {remember.text}
                </Typography>
                {/* <ListItemText primary="dtdkdkdkdkdkdk"/> */}
                <li>Created at:{remember.created_at}</li>
                <li>Updated at:{remember.updated_at}</li>

                
                {user.id === remember.user_id || user.admin === true ? <div className="update-delete-buttons">
                <Button type="submit" variant="contained" color="secondary" onClick={() => handleEditRemember(remember)}> Update Remember </Button>
               
                {clickEdit ? <EditRemember remember={remember} editRemember={editRemember} setUserList={setUserList} clickEdit={clickEdit} setClickEdit={setClickEdit} /> : null}
                
                <Button type="submit" variant="contained" color="secondary" onClick={() => handleClick(remember)}> Delete Remember </Button>

                </div> : null}

                {tags ? <Typography variant="h5" gutterBottom>
                    Tags
                </Typography> : null}

               {user.id === remember.user_id || user.admin === true ? <Button type="submit" variant="contained" color="secondary" onClick={handleUpdateTags}> Update Tags </Button> : null}

               {showTagCreate ? <CreateTag tagList={tagList} setTagList={setTagList}/> :null}
               {showTagUpdateList ? 
                <TagForm 
                tagList={tagList} setTagList={setTagList} 
                myNewRemember={myNewRemember}
                currentRememberId={currentRememberId} 
                setCurrentRememberId={setCurrentRememberId}
                rememberTags={remember.remember_tags}
                /> 
                : null}

            <ul className="remember-tags"></ul>
            {tagsForEachRemember ?  tagsForEachRemember.map(tag => <UserTagList 
            key={tag.id} 
            tag={tag}
            errorList={errorList} 
            user={user} 
            deleteTag={deleteTag}
            remember={remember}
            userList={userList}
            deleteRememberTag={deleteRememberTag}
            

             />) : null}

        </div>
    )
}



export default UserRemDetail






{/* myNewRemember is  */}
{/* // myNewRemember is the STATE I created for the new Remember OBJECT
    // i'm using myNewRemember.id as the value of the object I am stringifying in my RememberTag post in TagFormDetail  */}
{/* using myNewRemember for my RememberTagPost */}


                {/* how to send down filtered of tags without interrupting the work TagForm does in client-side route? */}
                {/* setTagsForEachRemember */}
                {/* {newObject ?  newObject.map(tag => <UserTagList  */}

   {/* <div className="student-writing">
            <h2 className='student-name'>{student.full_name}'s Writing</h2>
            <ul className="student-remembers"></ul>
            {remembers ?  remembers.map(remember => <UserRemDetail 
            key={remember.id} 
            remember={remember}
             />) : null}
        </div> */}


            {/* {tags ?  tags.map(tag => <UserTagList 
            key={tag.id} 
            tag={tag}
            errorList={errorList} 
            user={user} 
            deleteTag={deleteTag}
            

             />) : null} */}

                              {/* <button onClick={() => handleEditRemember(remember)} className='update'>Update Remember</button> */}
                {/* <Button type="submit" variant="contained" color="secondary" onClick={handleUpdateTags}> Update Tags </Button> */}
                {/* <button onClick={() => handleClick(remember)} className='delete'>Delete Remember</button> */}
{/* send down a filter list of tags  */}
                {/* {tags ? <h5 className="tag-label">Tags</h5> : null} */}

                        // useEffect(() => {
        //     updateTagsListRemember(remember)
        // }, [remember])

        // updateTagsListRemember(newObject)
        // console.log(tagsListRemember, "tagsListRemember!!!!!")
        
        // console.log(remember.tags)

         //     const mergeById = (a1, a2) =>
    // a1.map(itm => ({
    //     ...a2.find((item) => (item.id === itm.id) && item),
    //     ...itm
    // }));
    // https://stackoverflow.com/questions/46849286/merge-two-array-of-objects-based-on-a-key


    // console.log(tags, "tags........this user's tags for each remember")
    // console.log(remember_tags, "remember_tags......... this user's remember_tags for each remember")
    // console.log(newObject, "newObject........this user's ")

        //     created_at: "2022-10-25T10:45:54.645Z"
        // id: 3
        // name: "School"
        // newId: 2
        // remember_id: 2
        // tag_id: 3
        // updated_at: "2022-10-25T10:45:54.645Z"


        // console.log(tags)
        // console.log(newObject, "newObject!!!!!!!!!!!!!!!!!!!!!!!!!")
        // to change state here, change tags array 
        // 

    // these are all grabbed from the UserList fetch

                // console.log(studentRemembers)
    // this piece of state holds both an array of Tags (which includes name attribute) and RememberTag which is the join table connecting a Tag with a Remember)

    // const { tagsListRemember, updateTagsListRemember } = useContext(TagsListRememberContext);
