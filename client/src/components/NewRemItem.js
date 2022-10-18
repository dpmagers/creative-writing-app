import React, {useState} from 'react'
import TagForm from './TagForm'

function NewRemItem ({text, tagList, setTagList}) {
    const [clickAddTags, setClickAddTags] = useState(false)

    const handleClick = (e) => {
        setClickAddTags(!clickAddTags)
        console.log(e.target.value)
    }
// how to pass in the Remember item to the handleClick? 
    
 

    return (
        <div className="remember">
            <li className='remember-item'>{text}</li>

            <button onClick={handleClick} className='add-tag'>
                <i className="add-tag">Add Tags</i>
            </button>

            {clickAddTags ? <TagForm  tagList={tagList} setTagList={setTagList}/> : null}

        </div>
    )
    // <TagForm  />
    // {tagList ?  tagList.map(tag => <TagFormDetail key={tag.id}  tag={tag} 
    //     /> ) : null}

}
// turn this delete button into a category dropdown 
export default NewRemItem

// id: 1,                                                         
// user_id: 4,                                                    
// set_to_private: false,                                         
// text: