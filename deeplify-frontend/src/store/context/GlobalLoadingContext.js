import React, { createContext, useState, useContext } from 'react';

const initialGlobalLoadingContext = {
    showGlobalLoading: false,
    setShowGlobalLoading: () => { },
};

export const GlobalLoadingContext = createContext(initialGlobalLoadingContext);

export const GlobalLoadingContextProvider = ({ children }) => {
    const [showGlobalLoading, setShowGlobalLoading] = useState(false);

    return (
        <GlobalLoadingContext.Provider value={{ showGlobalLoading, setShowGlobalLoading }}>
            {children}
        </GlobalLoadingContext.Provider>
    );
};

export const useGlobalLoading = () => useContext(GlobalLoadingContext);