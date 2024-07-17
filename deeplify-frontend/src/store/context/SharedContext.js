import React, { createContext, useState, useContext } from 'react';

const initialSharedContext = {
    clickCount: 0,
    setClickCount: () => { },
};

export const SharedContext = createContext(initialSharedContext);

export const SharedContextProvider = ({ children }) => {
    const [clickCount, setClickCount] = useState(0);

    return (
        <SharedContext.Provider value={{ clickCount, setClickCount }}>
            {children}
        </SharedContext.Provider>
    );
};

export const useSharedContext = () => useContext(SharedContext);