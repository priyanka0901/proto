'use strict';

import React from 'react';
const Navbar = React.createClass({
    render: function() {
        return (
            <div className="navbar navbar__grey">
                <div className="navbar__title">
                    <p className="navbar__title_logo">Proto </p>
                    <p className="navbar__title_item">My diet </p>
                </div>
            </div>    
       );
    }
});

export default Navbar;