import React, {useState} from 'react'
import UserRemDetail from "./UserRemDetail"


function UserRemList ({student}) {
    // const [text, setText] = useState("")


// handle change 
let remembers 

if (student ) {
    remembers = student.remembers
    console.log(remembers)
}

    return (

        <div className="student-writing">
            <h2 className='student-name'>{student.full_name}'s Writing</h2>
            <ul className="student-remembers"></ul>
            {remembers ?  remembers.map(remember => <UserRemDetail 
            key={remember.id} 
            remember={remember}
             />) : null}
        </div>
    )
}


export default UserRemList