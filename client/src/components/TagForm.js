import React, {useState, useEffect} from "react";
import TagFormDetail from "./TagFormDetail"


function TagForm({tagList, setTagList, myNewRemember, setUserList, currentRememberId, setCurrentRememberId}) {
    // const [addTag, setAddTag] = useState(false)
 
    // console.log(tagList, "hello")


    console.log(tagList)
    return (
        <div>
            <div>

             {tagList.map(tag => <TagFormDetail key={tag.id}  tag={tag} 
             tagList={tagList} myNewRemember={myNewRemember}
             setUserList={setUserList}
             currentRememberId={currentRememberId} 
                setCurrentRememberId={setCurrentRememberId}
                    /> ) }
            </div>

        </div>
    )
}

export default TagForm


// where does this component go? 