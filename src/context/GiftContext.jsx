import { createContext, useContext, useState } from "react";

// We create the context
const GiftContext = createContext();

// We create a hook to access the context more easily
export const useGifts = () => {
    return useContext(GiftContext);
};

// Function to generate an ID by date
const generateId = () => Date.now().toString();

export function GiftProvider({ children }) {
    // Global Gift State
    const [gifts, setGifts] = useState([]);

    // Function to add a new gift
    const addGift = (name, description) => {
        // Avoid adding if name is empty
        if (!name.trim()) return;

        const newGift = {
            id: generateId(),
            name,
            description,
        };

        setGifts([...gifts, newGift]);
    };

    // Function to get a gift by id
    const getGiftById = (id) => {
        return gifts.find((gift) => gift.id === id);
    };

    return (
        <GiftContext.Provider value={{ gifts, addGift, getGiftById }}>
            {children}
        </GiftContext.Provider>
    );
}
