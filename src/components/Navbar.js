import navlist from './navigation.json';
import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './Navbar.scss';

import Api from './Api';

class Navbar extends React.Component {
    

    render(){

        const navigator = navlist.map((e) => e)

        return (
            <Router>
            <div className="nav_bar">
                <img src={process.env.PUBLIC_URL + './images/dota.png'} alt='logodota'/> 
                <ul>
                    {
                        navigator.map((e) => <li><Link to={e.link}> {e.name} </Link></li>)
                    }
                </ul>
            </div>
                    <Switch>
                        <Route path="/About">
                            About
                        </Route>
                        <Route path="/Pro-Players">
                            proplayers
                            <Api/>
                        </Route>
                        <Route path="/" exact>
                            Home
                        </Route>
                    </Switch>
            </Router>
                
        )
    }
}

export default Navbar;