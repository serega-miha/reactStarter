import {Link, NavLink} from 'react-router-dom';
import './appHeaders.css';

const AppHeader = () => {

    return (
        <div className="header-container">
            <h1>Links for all pages</h1>
            <div className="header-links">
                <h2 className='links-home'>
                    <Link to='/'>
                        Link to <span>Home</span>
                    </Link>
                </h2>
                <ul className="links">
                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/bootform'>BootForm</NavLink>
                    </li>

                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/test'>Test</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/weatherapi'>weatherApi</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/whoami'>WhoAmI</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/weatherapinew'>weatherApiNew</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/shablon'>shablon DD</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/slider'>slider</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/loginapp'>LoginApp</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/roster'>Roster</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/animation' >MenuAnim</NavLink>
                    </li>
                    <li className="link">
                        <NavLink activeStyle={{'color': '#9f0013'}} to='/about'>About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AppHeader;