import React from 'react'

function Home () {
    return (
        <div className="Homepage">
            <img className="homepage-img"
                src="https://m.media-amazon.com/images/I/71Npzl4Pl-L.jpg"
                width="300px" 
                height="460px"
            ></img>
            <h3>I Remember: A Creative Writing App is an application inspired by Joe Brainard's seminal memoir I Remember and the teaching pedagogy it spawned.</h3>
        </div>
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