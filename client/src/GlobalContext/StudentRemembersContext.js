import React, { useState, createContext, useEffect, useContext } from 'react';

const StudentRemembersContext = createContext();
export const useStudentRemembers = () => {
    return useContext(StudentRemembersContext)
}

export const StudentRemembersProvider = ({children}) => {

    const [studentRemembers, setStudentRemembers] = useState([])

    const updateStudentRemembers = (value) => {
        setStudentRemembers(value)
    }
    
    return (
        <StudentRemembersContext.Provider
            value={{ studentRemembers, updateStudentRemembers
 }}
        >
            {children}
        </StudentRemembersContext.Provider>
    )
}
