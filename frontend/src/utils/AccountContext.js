import React, { createContext, useState, useContext } from 'react';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
    //   const [packageData, setPackageData] = useState("");
    const [view, setView] = useState(false);
    const data = {
        // packageData,
        // setPackageData
        view,
        setView
    };
    return (
        <AccountContext.Provider value={data}>
            {children}
        </AccountContext.Provider>
    );
};

export const useAccount = () => {
    return useContext(AccountContext);
};
