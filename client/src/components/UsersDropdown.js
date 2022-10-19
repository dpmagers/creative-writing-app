import React from 'react'

function UsersDropdown ({aUser, user, userList, setUserList}) {


// handle change 

    return (
        <div>
            <h1>Classroom Writing</h1>

            <form>
                <label>Select User's Writing</label>
                <select>
                    <option value="user-name">{aUser.name}</option>
                </select>
            </form> 
        </div>
    )
}

export default UsersDropdown