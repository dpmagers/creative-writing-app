import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function UserTagList ({tag, errorList, user, deleteTag, remember, deleteRememberTag}) {

    const handleClick = (tag) => {
        deleteRememberTag(tag.id)
    }

    return(

        <div className="remember-tags">
            {/* <li>{tag.name}</li> */}
            <Typography variant="h6" gutterBottom>
                    {tag.name}
                </Typography>
            {user.id === remember.user_id || user.admin === true ? <div className="update-delete-buttons">
            <Button type="submit" variant="contained" color="secondary" onClick={() => handleClick(tag)}> Delete Tag </Button>
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