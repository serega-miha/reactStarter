import './menuAnim.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import HeaderMenuAnimation from './HeaderMenuAnimation';
import MainMenuAnim from './MainMenuAnim';

import { Helmet } from 'react-helmet';



const MenuAnim = () => {

    return (

        <div className="menuanim">
            <Helmet>
                <meta
                    name="description"
                    content="menu animation"
                />
                <title>menu animation</title>
            </Helmet>
            <div className="menuanim-header">
                <HeaderMenuAnimation />
            </div>
            <div className="menuanim-main">
                <MainMenuAnim />
            </div>
        </div>



    )
}

export default MenuAnim;