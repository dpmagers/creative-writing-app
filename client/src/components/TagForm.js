import React, {useState, useEffect} from "react";
import TagFormDetail from "./TagFormDetail"


function TagForm({tagList, setTagList, myNewRemember, setUserList, currentRememberId, setCurrentRememberId, rememberTags}) {
    // const [addTag, setAddTag] = useState(false)
 
    // console.log(tagList, "hello")





    console.log(tagList, "tagList")
    return (
        <div>
            <div>

             {tagList.map(tag => <TagFormDetail key={tag.id}  tag={tag} 
             tagList={tagList} myNewRemember={myNewRemember}
             setUserList={setUserList}
             currentRememberId={currentRememberId} 
                setCurrentRememberId={setCurrentRememberId}
                rememberTags={rememberTags}
                    /> ) }
            </div>

        </div>
    )
}

export default TagForm


// where does this component go? 