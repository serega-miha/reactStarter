import './aniBlocks.scss';
// import logo from '../../../../src/images/logo512.png';

import { useState,useEffect } from "react";
import { Transition } from 'react-transition-group';




const AniBlocks = () => {
        const [jumpBlock, setJumpBlock] = useState(false)
        const [showText, setShowText] = useState(false)
      
    
    return(
        <
        >
        <div className="menu-anim-block__header">
       <h2>blocks</h2>
       <button onClick={() => setJumpBlock(true)}>start</button>
       <button onClick={() => setJumpBlock(false)}>reset</button>
       <div className="block-container">
            <Blocks jumpBlock={jumpBlock}
            setShowText={setShowText}
            />
            {showText ? <h3 className='text-blocks'>Текст который сложно прочитать</h3> : null}
       </div>
        </div>
        <div className="menu-anim-block__body">
            
        </div>
    </>
    )
}


const Blocks = (props) => {

    const duration = 400;

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        transform: 'translateX(100px)',
        
    }

    const transitionStyles = {
        entering: {  transform: 'translateX(0px)', },
        entered:  {  transform: 'translateX(300px)', },
        exiting:  {  transform: 'translateX(300px)', },
        exited:  {  transform: 'translateX(0px)', },
    };
    return (
        <Transition
        timeout={duration}
        in={props.jumpBlock}
        onEntering={() => props.setShowText(true)}
        onEntered={() => props.setShowText(false)}
        >
            {state => (
                <div className="block"
                style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                 }}
                >OK</div>
                
            )}
            
        </Transition>
    )
}

export default AniBlocks;