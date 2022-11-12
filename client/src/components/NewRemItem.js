import React, {useState} from 'react'
import TagForm from './TagForm'
import CreateTag from './CreateTag'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemText } from '@mui/material';

function NewRemItem ({text, tagList, setTagList, myNewRemember}) {
    const [clickAddTags, setClickAddTags] = useState(false)
    const [clickCreateTags, setClickCreateTags] = useState(false)
    const [newRememberTag, setNewRememberTag] = useState(false) 

const handleClick = (e) => {
    setClickAddTags(!clickAddTags)
    setClickCreateTags(!clickCreateTags)
}

console.log(myNewRemember, "myNewRemember")

    return (
        <div className="remember">
            <List>
                {/* <ListItemText sx={{ variant: "h6"}} variant="h6" primary={text} /> */}
                <Typography variant="h6" gutterBottom>
                    {text}
                </Typography>

            <Button type="submit" variant="contained" color="secondary" onClick={handleClick}> Add Tags </Button>
            {/* <ListItemButton type="submit" variant="contained" color="secondary" onClick={handleClick}> Add Tags </ListItemButton> */}

            </List>
            {clickCreateTags ? <CreateTag  tagList={tagList} setTagList={setTagList}/> : null}
            {clickAddTags ? <TagForm  tagList={tagList} setTagList={setTagList} 
            myNewRemember={myNewRemember}
            rememberTags={myNewRemember.remember_tags}
            /> : null}

        </div>
    )
}
export default NewRemItem






            {/* <li className='remember-item'>{text}</li> */}
            {/* <ListItemText primary={text}/> */}


            {/* <ListItemButton><ListItemText style={text} primary="{text}" /></ListItemButton> */}


            {/* <ListItemButton component="a" href="#simple-list">
 <ListItemText
        disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>MyTitle</Typography>}
      />            
      </ListItemButton> */}


            {/* <button onClick={handleClick} className='add-tag'>
            </button> */}