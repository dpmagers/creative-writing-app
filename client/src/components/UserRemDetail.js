import React, {useState} from 'react'
import UserTagList from "./UserTagList"
import EditRemember from "./EditRemember"



function UserRemDetail ({remember, deleteRemember, errorList, user, deleteTag, editRemember, setUserList, student, userList}) {
    const [clickEdit, setClickEdit] = useState(false)


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
            // console.log(remember)
        const handleClick = (remember) => {
            deleteRemember(remember.id)
    
        }

    //     const mergeById = (a1, a2) =>
    // a1.map(itm => ({
    //     ...a2.find((item) => (item.id === itm.id) && item),
    //     ...itm
    // }));
    // https://stackoverflow.com/questions/46849286/merge-two-array-of-objects-based-on-a-key

        const handleEditRemember = (remember) => {
            setClickEdit(!clickEdit)
            // console.log(remember)
        }

        // console.log(user)



    return (
        <div>
            <ul className="student-remembers"></ul>
                <li>{remember.text}</li>
                
                {user.id === remember.user_id || user.admin === true ? <div className="update-delete-buttons">
                <button onClick={() => handleEditRemember(remember)} className='update'>Update Remember</button>
                {clickEdit ? <EditRemember remember={remember} editRemember={editRemember} setUserList={setUserList} clickEdit={clickEdit} setClickEdit={setClickEdit} /> : null}

                <button onClick={() => handleClick(remember)} className='delete'>Delete Remember</button>
                </div> : null}

                {tags ? <h5 className="tag-label">Tags</h5> : null}
            <ul className="remember-tags"></ul>
            {newObject ?  newObject.map(tag => <UserTagList 
            key={tag.id} 
            tag={tag}
            errorList={errorList} 
            user={user} 
            deleteTag={deleteTag}
            remember={remember}
            userList={userList}
            

             />) : null}

            {/* {tags ?  tags.map(tag => <UserTagList 
            key={tag.id} 
            tag={tag}
            errorList={errorList} 
            user={user} 
            deleteTag={deleteTag}
            

             />) : null} */}
        </div>
    )
}

{/* <div className="student-writing">
            <h2 className='student-name'>{student.full_name}'s Writing</h2>
            <ul className="student-remembers"></ul>
            {remembers ?  remembers.map(remember => <UserRemDetail 
            key={remember.id} 
            remember={remember}
             />) : null}
        </div> */}

export default UserRemDetail