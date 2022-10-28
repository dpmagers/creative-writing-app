import React, {useState, useEffect, useContext} from "react";
import TagFormDetail from "./TagFormDetail"
import { RememberTagListContext } from '../GlobalContext/RememberTagListContext';



function TagForm({tagList, setTagList, myNewRemember, setUserList, currentRememberId, setCurrentRememberId, rememberTags}) {

    const { rememberTagList, updateRememberTagList } = useContext(RememberTagListContext);

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


