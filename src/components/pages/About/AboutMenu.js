
import { Link } from "react-router-dom";
import { createRef } from 'react'
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";


const routes = [
    { path: '/', name: 'About', element: <About1 />, nodeRef: createRef() },
    { path: '/about2', name: 'About2', element: <About2 />, nodeRef: createRef() },
    {
      path: '/about3',
      name: 'About3',
      element: <About3 />,
      nodeRef: createRef(),
    },
  ]

const AboutMenu = () => {
    return (
        <ul>
            <li><Link activeStyle={{'color': '#9f0013'}} to="contacts">our contacts</Link></li>
            <li><Link activeStyle={{'color': '#9f0013'}} to="team">our team</Link></li>
            <li><Link activeStyle={{'color': '#9f0013'}} to="punkt">our team</Link></li>
        </ul>

    )

}

export default AboutMenu;