import React, {useState} from 'react'
import UserTagList from "./UserTagList"
import EditRemember from "./EditRemember"



function UserRemDetail ({remember, deleteRemember, errorList, user, deleteTag, editRemember}) {
    const [clickEdit, setClickEdit] = useState(false)



        let tags
        if (remember ) {
            tags = remember.tags
            // console.log(tags)
        }
        // console.log(remember.id)

        const handleClick = (remember) => {
            deleteRemember(remember.id)
    
        }

        const handleEditRemember = (remember) => {
            setClickEdit(!clickEdit)
            console.log(remember)
        }



    return (
        <div>
            <ul className="student-remembers"></ul>
                <li>{remember.text}</li>
                <button onClick={() => handleEditRemember(remember)} className='update'>Update Remember</button>
                {clickEdit ? <EditRemember remember={remember} editRemember={editRemember}  /> : null}

                <button onClick={() => handleClick(remember)} className='delete'>Delete Remember</button>
                {tags ? <h5 className="tag-label">Tags</h5> : null}
            <ul className="remember-tags"></ul>
            {tags ?  tags.map(tag => <UserTagList 
            key={tag.id} 
            tag={tag}
            errorList={errorList} 
            user={user} 
            deleteTag={deleteTag}
            

             />) : null}

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