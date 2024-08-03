import React, {useEffect, useState} from 'react'
import './Starter2.css'

const Starter2 = ({onEnter}) => {
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

    const handleClick = () => {
        // Reset scroll position
        window.scrollTo(0, 0)
        // Call the passed in onEnter function
        if (onEnter) onEnter()
    }

    return (
        <div>
            <div className="front-box">
                <div className="front"></div>
            </div>
            <div className="back-box">
                <div className="back"></div>
            </div>
            <div className="centered-text p-2 px-6 border-y-[2px] border-white poppins">
                <button onClick={handleClick}>{buttonText}</button>
            </div>
        </div>
    )
}

export default Starter2
