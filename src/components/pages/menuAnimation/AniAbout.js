import './aniAbout.scss'
// import logo from '../../../../src/images/logo512.png';

import { useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group'

const AniAbout = () => {
    const [showText, SetShowText] = useState(false);
    const ref = useRef()

    function buttonToggle() {
        SetShowText(!showText)
    }
    
    return(
        <>
        <div className="menu-anim-block__header">
       <h2>about</h2>
        </div>
        <div className="menu-anim-block__body">
        <button className="btn btn-primary" onClick={buttonToggle}>Нажми на кнопку</button>  
        </div>
        <CSSTransition
           in={showText}
           timeout={200}
           classNames='alert'
           unmountOnExit
           nodeRef={ref}
        >
                <h2 ref={ref}>Получишь ты пизды!!!</h2>
        </CSSTransition>
        
    </>
    )
}

export default AniAbout;