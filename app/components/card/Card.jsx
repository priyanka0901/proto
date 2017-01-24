'use strict';

import React from 'react';
import Cardview from './Cardview.jsx'
import recipe from '../../data/recipe.js';

const Card = React.createClass({
 render: function(){
    return(
    <div className="pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1">
     <Cardview />
    </div>
        );
    }
});

export default Card;