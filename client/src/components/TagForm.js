import React, {useState, useEffect} from "react";
import TagFormDetail from "./TagFormDetail"


function TagForm({tagList, setTagList}) {
    // const [addTag, setAddTag] = useState(false)
    const [newRememberTags, setNewRememberTags] = useState("")

    const addRememberTag = id => {
        // let brandNewRememberTag = 
        // {remember_id: remember.id, 
        // tag_id: tag.id} 

        // setNewRememberTags([...newRememberTags, brandNewRememberTag]);
      };

    //   a rememberTag contains a remember.id & a tag.id

    return (
        <div>
            <form>

            {tagList ?  tagList.map(tag => <TagFormDetail key={tag.id}  tag={tag} 
                    /> ) : null}
            </form>

        </div>
    )
}

export default TagForm


// where does this component go? 