'use strict';

import React from 'react';
import {Link} from 'react-router';
const Navbar = React.createClass({
    render: function() {
        return (
            <div className="navbar navbar__grey">
                <p className="navbar__logo"><Link to="/">Proto</Link></p>
                <p className="navbar__item"><Link to="/mydiet">My Diet</Link></p>
            </div>    
       );
    }
});

export default Navbar;