import React, {useEffect, useState} from 'react'
import UserRemList from "./UserRemList"


function UsersContainer ({user, userList, setUserList, deleteRemember, errorList, deleteTag, editRemember}) {
    const [selectedStudent, setSelectedStudent] = useState("")
    const [studentWriting, setStudentWriting] = useState("")




    
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


     return (
        <div>
            <h1>Classroom Writing</h1>
            <div className="left-column">
                <div className="users-container">
                <ul className="users-list"></ul>
                    <select value={selectedStudent} onChange={e => setSelectedStudent(e.target.value)}>
                        <option></option>
                        {classroomUsers ?  classroomUsers.map(aUser => <option>{aUser.full_name}</option>    

        
                        ) : null}
                    </select>
                <ul className="user-writing"></ul>
                    {!studentData ? null : studentData.map(student => <UserRemList 
                    key={student.id}
                    student={student}
                    deleteRemember={deleteRemember} 
                    errorList={errorList}
                    user={user}
                    deleteTag={deleteTag}
                    editRemember={editRemember}
                    />)}

                </div>
                <div className="right-column">
                    <p>[instructions right column]</p>

                </div>

            </div>

        </div>
    )
}

export default UsersContainer