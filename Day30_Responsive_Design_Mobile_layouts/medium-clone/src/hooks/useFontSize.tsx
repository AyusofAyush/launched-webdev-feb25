import { useState, useEffect } from 'react';

export const useFontSize = () => {
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 24));
    const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12));

    useEffect(() => {
        // Dynamically update the root font size
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [fontSize]);

    return { fontSize, increaseFontSize, decreaseFontSize };
};
