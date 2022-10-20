import React from 'react'

function UserWritingList ({student}) {


// handle change 

    return (
        <div className="student-writing">
            <h2 className='student-name'>{student.full_name}</h2>
        </div>
    )
}


export default UserWritingList