import React from 'react'
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

function Home () {

    // let history = useHistory()

    // const handleLoginClick = () => {
    //    history.push('/login')
    // }

    // const handleSignupClick = () => {
    //     history.push('/signup')
    //  }

    return (
        <Box
        sx={{
            m: 5,
            // p: 2
        }}
        >
        <div className="Homepage">

            <Box
                    component="img"
                    sx={{
                        // borderLeft: 50px solid, 
                    // spacing: 5,
                    height: 460,
                    width: 300,
                    // maxHeight: { xs: 1500, md: 1350 },
                    // maxWidth: { xs: 150, md: 200 },
                    }}
                    alt="I Remember book cover."
                    src="https://m.media-amazon.com/images/I/71Npzl4Pl-L.jpg"
                />
            {/* <img className="homepage-img"
                src="https://m.media-amazon.com/images/I/71Npzl4Pl-L.jpg"
                width="300px" 
                height="460px"
            ></img> */}

            <Typography variant="h5" gutterBottom>
                    I Remember: A Creative Writing App is a web application inspired by American artist Joe Brainard's (March 11, 1942 – May 25, 1994) seminal memoir <i>I Remember</i> (1975) and the teaching pedagogy it inspired.<br></br>
            </Typography>

            <Typography variant="h6" gutterBottom>
                    Login with your account or Signup in the navigation bar above.
                </Typography>
                {/* <Button variant="contained" color="secondary" onClick={handleLoginClick}>      Login
                </Button> */}
                {/* <Typography variant="h5" gutterBottom>
                    Learn more about I Remember!
                </Typography> */}
                {/* <Button variant="contained" color="secondary" onClick={handleSignupClick}>      Signup
                </Button> */}

        </div>
        </Box>
    )
}

export default Home

{/* <div className="book-detail">
            <img className="book-image" 
                src={book.image} 
                width="300px" 
                height="460px"
                onClick={() => handleClick(book)}>

            </img>
            <h3 className="book-title"> Title {book.title}</h3>
            <p>Author {book.author}</p>
            <p>Synopsis {book.synopsis}</p>

        </div> */}