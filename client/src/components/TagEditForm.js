import React, {useState, useEffect} from "react";
import TagFormEditDetail from "./TagFormEditDetail"


function TagEditForm({tagList, setTagList, myNewRemember, setUserList}) {
    // const [addTag, setAddTag] = useState(false)
 
    // console.log(tagList, "hello")


    return (
        <div>
            <div>

             {tagList.map(tag => <TagFormEditDetail key={tag.id}  tag={tag} 
             
             tagList={tagList} 
             myNewRemember={myNewRemember}
             setUserList={setUserList}
                    /> ) }
            </div>

        </div>
    )
}

export default TagEditForm


// where does this component go? 