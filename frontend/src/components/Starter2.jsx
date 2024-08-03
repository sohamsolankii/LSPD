import React, {useEffect, useState} from 'react'
import './Starter2.css'

const Starter2 = () => {
    const [hasEntered, setHasEntered] = useState(false)
    const [buttonText, setButtonText] = useState('Scroll down')

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.7
            if (window.scrollY >= scrollThreshold) {
                setButtonText('Click to enter')
                document.querySelector('.centered-text').style.display = 'block'
            } else {
                setButtonText('Scroll down')
                document.querySelector('.centered-text').style.display = 'block'
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleEnter = () => {
        setHasEntered(true)
        document.body.style.overflow = 'auto' // Restore scrolling
    }

    return (
        <div className={`starter2 ${hasEntered ? 'hidden' : ''}`}>
            <div className="front-box">
                <div className="front"></div>
            </div>
            <div className="back-box">
                <div className="back"></div>
            </div>
            <div className="centered-text p-2 px-6 border-y-[2px] border-white poppins">
                <button onClick={handleEnter}>{buttonText}</button>
            </div>
        </div>
    )
}

export default Starter2
