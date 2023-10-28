

import AniAbout from "./AniAbout";
import AniContacts from "./AniContacts";
import AniHome from "./AniHome";
import AniBlocks from "./AniBlocks";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from 'react-spring'













const MainMenuAnim = () => { 
    const location = useLocation();
    const transition = useTransition(
        location,
        location => location.pathname,
        {
        from: { opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
      });
    // const transition = useTransition(location, location => location.key, {})
    return(
        <div className="container">
           
                    {
                    transition.map(({item, props, key}) => (
                        <animated.div key={key} style={props}>
                            <div style={{positon: 'absolute', width: '100%'}}>
                            <Routes location={location} key={location.pathname}>
                
                        <Route  path=''
                        element={ <AniHome/>}>
                        
                        </Route>
                        <Route  path='about'
                        element={<AniAbout/>}>
                            
                        </Route>
                        <Route path='contacts'
                        element={ <AniContacts/>}>
                        
                        </Route>
                        <Route path='blocks'
                        element={ <AniBlocks/>}>
                        
                        </Route>
                     </Routes>
                
                            </div>
                        </animated.div>

                    ))}
                   
 
           
        </div>
        

  


     
    )
}

export default MainMenuAnim;