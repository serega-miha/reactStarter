import './menuAnim.scss';

import { BrowserRouter as Router  } from 'react-router-dom';
import HeaderMenuAnimation from './HeaderMenuAnimation';
import MainMenuAnim from './MainMenuAnim';




const MenuAnim = () => {

    return(
       
         <div className="menuanim">
            <div className="menuanim-header">
                <HeaderMenuAnimation/>
            </div>
            <div className="menuanim-main">
                <MainMenuAnim/>
            </div>
        </div>
        

     
    )
}

export default MenuAnim;