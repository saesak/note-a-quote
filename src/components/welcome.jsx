import React, { Component, Fragment } from "react";
import { Outlet, Link } from 'react-router-dom';


class Welcome extends Component {

    render () {
        return (
            <div> 
                <h1>Welcome Page</h1>
                <nav>
                    <Link to="/container">Container</Link>
                </nav>
                <Outlet />
            </div>
        );
    }
}

export default Welcome