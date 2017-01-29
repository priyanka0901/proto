'use strict';

import React from 'react';
import Card from './card/Card.jsx';
import Mydiet from './mydiet/Mydiet.jsx';

var dietItem ={};
const Cardcontainer = React.createClass({
    handleClickDiet:function(info){

        var Orequest = new XMLHttpRequest();
        Orequest.onload =function(e){
        var ajaxdata = Orequest.response;
        dietItem[info.recipeId] = {
            'id':info.recipeId,
            'name':info.name,
            'image':info.image,
            'calcium':ajaxdata[0],
            'calories':ajaxdata[1],
            'protein':ajaxdata[6],
            'vitamin':ajaxdata[13]
        };
     };
     Orequest.open('GET','http://api.cs50.net/food/3/facts?key=819a4a9a30d9c9a99e69caf23f4e54e7&recipe=' + info.recipeId + '&portion=1&output=json');
     Orequest.responseType="json";
     Orequest.send();
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



