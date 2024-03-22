import { useState, useEffect } from 'preact/hooks';

export default function Typewriter ({ text, delay, cursor = ""}) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCursor, setCurrentCursor] = useState(true);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
        
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentCursor(prevCursor => !prevCursor);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, currentCursor]);

    return <span>{currentText}{currentCursor ? cursor : ""}</span>;
};