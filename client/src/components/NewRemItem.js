import React from 'react'

function NewRemItem ({text}) {


    console.log({text})
    return (
        <div className="remember">
            <li className='remember-item'>{text}</li>

            <button className='delete'>
                <i className="delete">Add Tags</i>
            </button>
        </div>
    )

}
// turn this delete button into a category dropdown 
export default NewRemItem

// id: 1,                                                         
// user_id: 4,                                                    
// set_to_private: false,                                         
// text: