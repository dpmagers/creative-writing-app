import React, {useState} from 'react'

function TagFormDetail({tag}) {
    const [addTag, setAddTag] = useState(false)


    return (
        <div>
            <label htmlFor="tag-name">{tag.name}</label>
            <input 
                type="checkbox"
                id="tag-name"
                checked={addTag}
                onChange={(e) => setAddTag(e.target.checked)}
            />
            <button type="submit">Submit Tag</button>
        </div>
    )
}

export default TagFormDetail