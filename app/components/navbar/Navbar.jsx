'use strict';

import React from 'react';
const Navbar = React.createClass({
    render: function() {
        return (
            <div className="navbar navbar__grey">
                    <p className="navbar__logo">Proto </p>
                    <p className="navbar__item">My diet </p>
            </div>    
       );
    }
});

export default Navbar;