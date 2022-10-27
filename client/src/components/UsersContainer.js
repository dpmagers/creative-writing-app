import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";

import UserRemList from "./UserRemList"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function UsersContainer ({user, userList, setUserList, deleteRemember, errorList, deleteTag, editRemember, tagList, setTagList, myNewRemember, setMyNewRemember}) {
    const [selectedStudent, setSelectedStudent] = useState("")
    const [studentWriting, setStudentWriting] = useState("")
    


    let history = useHistory()

    const handleNewWritingClick = () => {
       history.push('/new-writing')
    }
    
    let classroomUsers 

    if (userList) {
        classroomUsers = userList.filter(classroomUser => {
            return user.classroom_id === classroomUser.classroom_id 
        })
    }

    let studentData
    if (classroomUsers) {
        studentData = classroomUsers.filter(student =>{
            return student.full_name === selectedStudent
        }) 
    }

    // console.log(studentData)



     return (
        <div>
            {/* <h1>Classroom Writing</h1> */}
            <Typography variant="h3" gutterBottom>
                    Classroom Writing
            </Typography>
            <Typography variant="h5" gutterBottom>
                    Read creative writing by your classmates!                
                </Typography>
            <Typography variant="h6" gutterBottom>
                    The dropdown below lists the students in our class. Click on a student and you will see their "I remember" writing. By selecting your own name, you will be able to update and delete your remember items, as well as add or delete tags associated with the remember item.
            </Typography>

            <div className="left-column">
                <div className="users-container">
                <ul className="users-list"></ul>
                    <select value={selectedStudent} onChange={e => setSelectedStudent(e.target.value)}>
                        <option></option>
                        {classroomUsers ?  classroomUsers.map(aUser => <option>{aUser.full_name}</option>    

        
                        ) : null}
                    </select> <br></br>
                    <Button variant="contained" color="secondary" onClick={handleNewWritingClick}>Return to New Writing Page</Button>

                <ul className="user-writing"></ul>
                    {!studentData ? null : studentData.map(student => <UserRemList 
                    key={student.id}
                    student={student}
                    deleteRemember={deleteRemember} 
                    errorList={errorList}
                    user={user}
                    deleteTag={deleteTag}
                    editRemember={editRemember}
                    setUserList={setUserList}
                    userList={userList}
                    tagList={tagList}
                    setTagList={setTagList}
                    myNewRemember={myNewRemember}
                    setMyNewRemember={setMyNewRemember}

                    />)}

                </div>
                <div className="right-column">
                    {/* <p>[instructions right column]</p> */}

                </div>

            </div>

        </div>
    )
}

export default UsersContainer