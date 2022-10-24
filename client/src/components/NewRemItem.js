import React, {useState} from 'react'
import TagForm from './TagForm'
import CreateTag from './CreateTag'


function NewRemItem ({text, tagList, setTagList, myNewRemember}) {
    const [clickAddTags, setClickAddTags] = useState(false)
    const [clickCreateTags, setClickCreateTags] = useState(false)
    const [newRememberTag, setNewRememberTag] = useState(false) 


const handleClick = (e) => {
    setClickAddTags(!clickAddTags)
    setClickCreateTags(!clickCreateTags)
}

// console.log(tagList)


    return (
        <div className="remember">
            <li className='remember-item'>{text}</li>

            <button onClick={handleClick} className='add-tag'>
                <i className="add-tag">Add Tags</i>
            </button>
            {clickCreateTags ? <CreateTag  tagList={tagList} setTagList={setTagList}/> : null}
            {clickAddTags ? <TagForm  tagList={tagList} setTagList={setTagList} 
            myNewRemember={myNewRemember}
            /> : null}

        </div>
    )

}
export default NewRemItem
