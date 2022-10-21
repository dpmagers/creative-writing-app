import React, {useState, useEffect} from "react";
import TagFormDetail from "./TagFormDetail"


function TagForm({tagList, setTagList, myNewRemember}) {
    // const [addTag, setAddTag] = useState(false)
 
    // console.log(tagList, "hello")


    return (
        <div>
            <div>

             {tagList.map(tag => <TagFormDetail key={tag.id}  tag={tag} 
             
             tagList={tagList} myNewRemember={myNewRemember}
                    /> ) }
            </div>

        </div>
    )
}

export default TagForm


// where does this component go? 