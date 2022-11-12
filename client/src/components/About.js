import React, { useReducer } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useHistory } from "react-router-dom"
import Box from '@mui/material/Box';


function About ({user}) {

    let history = useHistory()

    const handleNewWritingClick = () => {
       history.push('/new-writing')
    }

    const handleClassroomWritingClick = () => {
       history.push('/classroom-writing')
    }

    return (

        // <Box
        // sx={{
        //     width: 300,
        //     height: 300,
        //     backgroundColor: 'primary.dark',
        //     '&:hover': {
        //     backgroundColor: 'primary.main',
        //     opacity: [0.9, 0.8, 0.7],
        //     },
        // }}
        // >
        <Box sx={{
            m: 5,
            // p: 2
        }}
        
        >
        <div>

                {/* <Box
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                    /> */}



            <Typography variant="h3" gutterBottom>
                    About Page
            </Typography>
            <div className="left-column">

            {user ? <Typography variant="h5"
            sx={{color : "red", m: 5}} 
            gutterBottom>
                        Hello, {user.full_name}! <br></br>
                        Welcome to: {user.classroom.class_name}. <br></br>
                        Location: {user.classroom.location} <br></br>
                        Meeting times: {user.classroom.meeting_times}
                    </Typography> : null}
               
            </div>
            <div className="right-column">


                <Typography variant="h6"  gutterBottom>
                Joe Brainard (March 11, 1942 – May 25, 1994) was an American artist and writer associated with the New York School. His prodigious and innovative body of work included assemblages, collages, drawing, and painting, as well as designs for book and album covers, theatrical sets and costumes. In particular, Brainard broke new ground in using comics as a poetic medium in his collaborations with other New York School poets. He is best known for his memoir I Remember, of which Paul Auster said: "It is ... one of the few totally original books I have ever read." (from Wikipedia) <br></br>
                <i>I Remember</i> is an experimental memoir/prose poem, wherein Brainard begins a sentence with “I remember” and writes a memory from his life. With no attempt at telling a chronological story, or even a consistent theme, Brainard, in the words of Paul Auster, “in simple, forthright, declarative sentences…charts the map of the human soul and permanently alters the way we look at the world. I Remember is both uproariously funny and deeply moving.” (from back cover of <i>I Remember</i>) <br></br>
                The book’s simple, yet profound style has inspired the use of the “I remember” concept to the teaching of writing and poetry to adults, high school and college students, and even to children. 
            
                </Typography>

                <Typography variant="h5" sx={{ m: 2}} gutterBottom>
                    Start creative writing with I Remember!
                </Typography>
                <Button variant="contained" sx={{ m: 2}} color="secondary" onClick={handleNewWritingClick}>      New Writing Page
                </Button>
                <Typography variant="h5" sx={{ m: 2}} gutterBottom>
                    Read creative writing by your classmates!                
                </Typography>
                <Button variant="contained" sx={{ m: 2}} color="secondary" onClick={handleClassroomWritingClick}>Classroom Writing Page</Button>

            </div>
        </div>
        </Box>

    )

}

 {/* does user exist render , if not be null  */}
 {/* user's class info */}
                {/* how do I grab the classroom info for this user? */}
                {/* when I put in "{user}" after Welcome to: screen goes blank */}

export default About