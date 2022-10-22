import React, { useReducer } from 'react'

function About ({user}) {

    return (


        <div>
            <h1>About Page</h1>
            <div className="left-column">
               
                {user ? <h3>Hello, {user.full_name}! <br></br>
                Welcome to: {user.classroom.class_name}. <br></br>
                Location: {user.classroom.location} <br></br>
                Meeting times: {user.classroom.meeting_times}</h3>
                 : null}
               
            </div>
            <div className="right-column">
                <p>[Instructions]</p>

            </div>
        </div>

    )

}

 {/* does user exist render , if not be null  */}
 {/* user's class info */}
                {/* how do I grab the classroom info for this user? */}
                {/* when I put in "{user}" after Welcome to: screen goes blank */}

export default About