'use strict';

import React from 'react';
import Card from './card/Card.jsx';
import Mydiet from './mydiet/Mydiet.jsx';

const Cardcontainer = React.createClass({
    handleClickDiet:function(info){
        var item = {
         'id':info.id,
         'name':info.name,
         'image':info.image
         };
         console.log(item);
    },
    render:function(){
        return(
           <div>
                <Card handleClickDiet={this.handleClickDiet} />
           </div>
         );
    }
});

const Dietcontainer = React.createClass({
    render:function(){
        return(
           <div>
                <Mydiet />
           </div>
         );
    }
});
export  {Cardcontainer , Dietcontainer};