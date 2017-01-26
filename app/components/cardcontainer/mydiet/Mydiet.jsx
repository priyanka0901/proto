'use strict';

import React from 'react';
import Mydietview from './mydietview.jsx';

const Mydiet= React.createClass({
    render:function(){
        return(
           <div className="pure-g">
            { <Mydietview />}
           </div>
            );
    }
});
export default Mydiet;