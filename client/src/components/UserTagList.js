import React from 'react'

function UserTagList ({tag, errorList, user, deleteTag, remember}) {


    const handleClick = (tag) => {
        deleteTag(tag.newId)


    }
    // <button onClick={() => handleClick(remember)} className='delete'>Delete Remember</button>
    // console.log(tag)

    return(
        <div className="remember-tags">
            <li>{tag.name}</li>
            {user.id === remember.user_id || user.admin === true ? <div className="update-delete-buttons">
                <button onClick={() => handleClick(tag)} className='delete'>Delete Tag</button>
            </div> : null}
        </div>
    )
}

export default UserTagList
// {user.id === remember.user_id ? <div className="update-delete-buttons">
//                 <button onClick={() => handleEditRemember(remember)} className='update'>Update Remember</button>
//                 {clickEdit ? <EditRemember remember={remember} editRemember={editRemember} setUserList={setUserList} /> : null}

//                 <button onClick={() => handleClick(remember)} className='delete'>Delete Remember</button>
//                 </div> : null}



{/* <div className="student-writing">
            <h2 className='student-name'>{student.full_name}'s Writing</h2>
            <ul className="student-remembers"></ul>
            {remembers ?  remembers.map(remember => <UserRemDetail 
            key={remember.id} 
            remember={remember}
             />) : null}
        </div> */}