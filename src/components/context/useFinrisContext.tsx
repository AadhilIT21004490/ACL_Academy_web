"use client"
import { useContext } from 'react';
import FinrisContext from './FinrisContext';
import { contextType } from './contextType';

const useFinrisContext = (): contextType => {
    const context = useContext(FinrisContext);
    if (context === null) {
        throw new Error("useFinrisContext must be used within a <FinrisProvider>");
    }
    return context;
};

export { useFinrisContext };