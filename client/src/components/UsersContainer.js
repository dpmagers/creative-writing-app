import React, {useState} from 'react'
import UsersDropdown from "./UsersDropdown"


function UsersContainer ({user, userList, setUserList}) {
    const [selectedStudent, setSelectedStudent] = useState("")

    

// function sameClassroomId (allUsersList) {
// 	return user.classroom_id === current_user.classroom_id && !user.admin === true
// }

    let classroomUsers 

    if (userList) {
        classroomUsers = userList.filter(classroomUser => {
            return user.classroom_id === classroomUser.classroom_id 
        })
    }
    
    console.log(classroomUsers)

    let studentData
    if (classroomUsers) {
        studentData = classroomUsers.filter(student =>{
            return student.full_name === selectedStudent
        }) 

    }
    console.log(studentData)

 
 

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
                    

                </div>

            </div>

        </div>
    )
}

export default UsersContainer