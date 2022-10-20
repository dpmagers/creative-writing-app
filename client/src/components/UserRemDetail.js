import React from 'react'
import UserTagList from "./UserTagList"


function UserRemDetail ({remember}) {

        let tags
        if (remember ) {
            tags = remember.tags
            // console.log(tags)
        }

    return (
        <div>
            <ul className="student-remembers"></ul>
                <li>{remember.text}</li>
                <button>Update Remember</button>
                <button>Delete Remember</button>
                {tags ? <h5 className="tag-label">Tags</h5> : null}
            <ul className="remember-tags"></ul>
            {tags ?  tags.map(tag => <UserTagList 
            key={tag.id} 
            tag={tag}
             />) : null}

        </div>
    )
}

{/* <div className="student-writing">
            <h2 className='student-name'>{student.full_name}'s Writing</h2>
            <ul className="student-remembers"></ul>
            {remembers ?  remembers.map(remember => <UserRemDetail 
            key={remember.id} 
            remember={remember}
             />) : null}
        </div> */}

export default UserRemDetail