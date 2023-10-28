
import { NavLink } from "react-router-dom";




const HeaderMenuAnimation = () => {
    return(

        <ul className="menuanim-header__links">
        <li><NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='' end>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='about' >About</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='contacts'>Contacts</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='blocks'>Blocks</NavLink></li>
        
       </ul>
    )
} 


export default HeaderMenuAnimation;