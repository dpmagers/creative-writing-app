import React, {useEffect, useState} from 'react'
import UserRemDetail from "./UserRemDetail"
// import RememberFilter from "./RememberFilter"


function UserRemList ({student, deleteRemember, errorList, user, deleteTag, editRemember, setUserList, userList, tagList, setTagList, myNewRemember, setMyNewRemember}) {

    const [sortBy, setSortBy] = useState("")
    const [studentRemembers, setStudentRemembers] = useState([])

    let remembers 

    if (student ) {
        remembers = student.remembers
    }
    console.log(studentRemembers)
    useEffect(() => {
        setStudentRemembers(student.remembers)

    }, [])


    // const handleSort = (e) =>  {
    //     	setSortBy(e.target.value)
    //     }
    //     const remembersToDisplay = remembers
    //     .sort((remember1, remember2) => {
    //     	if (sortBy === "created_at") {
    //     		return remember1.created_at - remember2.created_at
    //     	} else if (sortBy === "updated_at"){
    //     		return remember1.updated_at.localeCompare(remember2.updated_at)
    //     	}
    //     })



        return (

            <div className="student-writing">
                {/* <RememberFilter sortBy={sortBy} handleSort={handleSort}/> */}

                {/* tried to map remembersToDisplay but this didn't seem to do anything */}
                <h2 className='student-name'>{student.full_name}'s Writing</h2>
                <ul className="student-remembers"></ul>
                {studentRemembers != [] ?  studentRemembers.map(remember => <UserRemDetail 
                key={remember.id} 
                remember={remember}
                deleteRemember={deleteRemember} 
                errorList={errorList}
                user={user}
                deleteTag={deleteTag}
                editRemember={editRemember}
                setUserList={setUserList}
                student={student}
                userList={userList}
                studentRemembers={studentRemembers}
                tagList={tagList}
                setTagList={setTagList}
                myNewRemember={myNewRemember}
                setMyNewRemember={setMyNewRemember}
                // remembers={remembers}
                // remembersToDisplay={remembersToDisplay}
                />) : null}
            </div>

        )
}


export default UserRemList