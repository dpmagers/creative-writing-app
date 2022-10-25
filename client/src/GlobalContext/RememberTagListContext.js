import React, { useState, createContext, useEffect } from 'react';

export const RememberTagListContext = createContext();

export const RememberTagListProvider = ({children}) => {

    const [rememberTagList, setRememberTagList] = useState([])

    const updateRememberTagList = (value) => {
        setRememberTagList(value)
    }
    
    return (
        <RememberTagListContext.Provider
            value={{ rememberTagList, updateRememberTagList
 }}
        >
            {children}
        </RememberTagListContext.Provider>
    )
}