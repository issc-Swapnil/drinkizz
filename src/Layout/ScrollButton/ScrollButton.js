import React, { useState } from 'react';
import '../layout.css'
const ScrollButton = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <span className="back-to-top" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
            <i className="fa fa-chevron-up"></i>
        </span>
    );
}

export default ScrollButton;