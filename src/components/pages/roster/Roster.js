import { useState } from 'react';
import './roster.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Helmet } from 'react-helmet';

const Roster = () => {

    const [show, setShow] = useState(false);
    
    const reptiles = ["alligator", "snake", "lizard"];


  reptiles.map((reptile) => <li>{reptile}</li>);
   
   
    return (
       
        <div className="roster">
             <Helmet>
                <meta
                    name="description"
                    content="Roster"
                />
                <title>Roster</title>
            </Helmet>
            <h2 onClick={()=> setShow(!show)}>
                {show ? 'Скрыть' : 'Показать'}
                </h2>
        <CSSTransition in={show} classNames='my-node' timeout={300} unmountOnExit>

            <div >Privet</div>
             
        </CSSTransition>
        
            
        
        <ul>
            <TransitionGroup>
            {reptiles.map((item, i) => (
                 <CSSTransition key={i}  classNames='my-node' timeout={300} >

                    <li>{item}</li>
                 </CSSTransition>
                
            ))}
            </TransitionGroup>
        </ul>
       
        </div>
       
    )
}

export default Roster;