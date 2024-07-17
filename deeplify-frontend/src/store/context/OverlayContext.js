import React, { createContext, useState, useContext } from 'react';

const initialOverlayContext = {
    showOverlay: false,
    setShowOverlay: () => { },
};

export const OverlayContext = createContext(initialOverlayContext);

export const OverlayContextProvider = ({ children }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <OverlayContext.Provider value={{ showOverlay, setShowOverlay }}>
            {children}
        </OverlayContext.Provider>
    );
};

export const useOverlay = () => useContext(OverlayContext);