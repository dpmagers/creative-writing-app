import React, { useState, createContext, useEffect } from 'react';

export const TagsListRememberContext = createContext();

export const TagsListRememberProvider = ({children}) => {

    const [tagsListRemember, setTagsListRemember] = useState([])

    const updateTagsListRemember = (value) => {
        setTagsListRemember(value)
    }
    
    return (
        <TagsListRememberContext.Provider
            value={{ tagsListRemember, updateTagsListRemember
 }}
        >
            {children}
        </TagsListRememberContext.Provider>
    )
}