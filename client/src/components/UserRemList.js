import React, {useEffect, useState} from 'react'

import UserRemDetail from "./UserRemDetail"
import RememberFilter from "./RememberFilter"
import {useStudentRemembers} from "../GlobalContext/StudentRemembersContext"
import Typography from '@mui/material/Typography';



function UserRemList ({student, deleteRemember, errorList, user, deleteTag, editRemember, setUserList, userList, tagList, setTagList, myNewRemember, setMyNewRemember}) {

    const [sortBy, setSortBy] = useState("")
    // const [studentRemembers, setStudentRemembers] = useState([])
    const [currentRememberId, setCurrentRememberId] = useState(null)
    const { studentRemembers, updateStudentRemembers} = useStudentRemembers()


    let remembers 

    if (student ) {
        remembers = student.remembers
    }
    useEffect(() => {
        updateStudentRemembers(student.remembers)

    }, [])

    // console.log(studentRemembers)


    const handleSort = (e) => {
        console.log("inside handleSort", e.target.value)

        let sortedItems = studentRemembers
        setSortBy(e.target.value)
        if (e.target.value === "created_at") {
            sortedItems.sort((a, b) => {
                const aDate = new Date(a.created_at)
                const bDate = new Date(b.created_at)
                return bDate - aDate
                
            }) 
        }
        if (e.target.value === "updated_at") {
            sortedItems.sort((a, b) => {
                const aDate = new Date(a.updated_at)
                const bDate = new Date(b.updated_at)
                return bDate - aDate
                
            }) 
        }
            updateStudentRemembers(sortedItems)
    }
    // console.log(student.remembers)
        return (
            <div className="student-writing">
                <RememberFilter sortBy={sortBy} handleSort={handleSort}/>

                {/* tried to map remembersToDisplay but this didn't seem to do anything */}
                <Typography variant="h4" gutterBottom>
                    {student.full_name}'s Writing
                </Typography>
                {/* <h2 className='student-name'>{student.full_name}'s Writing</h2> */}
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
                currentRememberId={currentRememberId} 
                setCurrentRememberId={setCurrentRememberId}
                // remembers={remembers}
                // remembersToDisplay={remembersToDisplay}
                />) : null}

            </div>

        )
}


export default UserRemList




   // filteredItems.filter(item =>  )
    // includes.
    // clear out sorting 
    // default clear sort if clear then default 
    // const isTagIncluded = !!rememberTags?.find(t => t.tag_id === tag.id) || false
    // console.log("==========================")
    // console.log(isTagIncluded, "isTagIncluded")

    // console.log(rememberTags, "rememberTags")
    // console.log(tag, "tag")
