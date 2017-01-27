'use strict';

import React from 'react';
import Card from './card/Card.jsx';
import Mydiet from './mydiet/Mydiet.jsx';

var dietItem ={};
const Cardcontainer = React.createClass({
    handleClickDiet:function(info){
          dietItem = {
         'id':info.recipeId,
         'name':info.name,
         'image':info.image
        };
        console.log(dietItem);
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
                <Mydiet dietItem={dietItem}/>
           </div>
         );
    }
});
export  {Cardcontainer , Dietcontainer};