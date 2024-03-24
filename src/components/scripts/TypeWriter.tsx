import { useState, useEffect } from 'preact/hooks'

export default ({ text, delay, init_delay = 0, cursor = ""}) => {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentCursor, setCurrentCursor] = useState(true)
    const [start, setStart] = useState(false)

    setTimeout(() => {
        setStart(true);
    }, init_delay)

    useEffect(() => {
        if (!start) return
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, currentText[currentIndex - 1] == "," ? delay * 15 : delay)
        
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setCurrentCursor(prevCursor => !prevCursor)
            }, 500)
            return () => clearTimeout(timeout)
        }
    }, [currentIndex, currentCursor, start])

    return <>{currentText}{currentCursor ? cursor : ""}</>
}