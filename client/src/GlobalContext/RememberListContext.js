import React, { useState, createContext, useEffect } from 'react';

export const RememberListContext = createContext();

export const RememberListProvider = ({children}) => {

    const [rememberList, setRememberList] = useState(null)

    const updateRememberList = (value) => {
        setRememberList(value)
    }
    
    return (
        <RememberListContext.Provider
            value={{ rememberList, updateRememberList
 }}
        >
            {children}
        </RememberListContext.Provider>
    )
}
