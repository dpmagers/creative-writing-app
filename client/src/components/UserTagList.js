import React from 'react'

function UserTagList ({tag}) {
    return(
        <div className="remember-tags">
                {/* {tag.name ? <h5 className="tag-label">Tags</h5> : null} */}
            <li>{tag.name}</li>
                <button>Update Tags</button>
                <button>Delete Tag</button>

        </div>
    )
}

export default UserTagList

{/* <div className="student-writing">
            <h2 className='student-name'>{student.full_name}'s Writing</h2>
            <ul className="student-remembers"></ul>
            {remembers ?  remembers.map(remember => <UserRemDetail 
            key={remember.id} 
            remember={remember}
             />) : null}
        </div> */}