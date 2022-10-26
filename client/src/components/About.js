import React, { useReducer } from 'react'
import Typography from '@mui/material/Typography';


function About ({user}) {

    return (


        <div>
            {/* <h2>About Page</h2> */}
            <Typography variant="h3" gutterBottom>
                    About Page
            </Typography>
            <div className="left-column">

            {user ? <Typography variant="h5" gutterBottom>
                        Hello, {user.full_name}! <br></br>
                        Welcome to: {user.classroom.class_name}. <br></br>
                        Location: {user.classroom.location} <br></br>
                        Meeting times: {user.classroom.meeting_times}
                    </Typography> : null}
               
                {/* {user ? <h3>Hello, {user.full_name}! <br></br>
                Welcome to: {user.classroom.class_name}. <br></br>
                Location: {user.classroom.location} <br></br>
                Meeting times: {user.classroom.meeting_times}</h3>
                 : null} */}
               
            </div>
            <div className="right-column">
                {/* <p>[Instructions]</p> */}
                <Typography variant="h6" gutterBottom>
                    [Instructions]
                </Typography>

            </div>
        </div>

    )

}

 {/* does user exist render , if not be null  */}
 {/* user's class info */}
                {/* how do I grab the classroom info for this user? */}
                {/* when I put in "{user}" after Welcome to: screen goes blank */}

export default About