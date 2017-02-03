'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card/Card.jsx';
import Mydiet from './mydiet/Mydiet.jsx';
import nutrition from '../../data/nutrition.js';

const dietItem = JSON.parse(localStorage.getItem('dietItem')) || {};

const Cardcontainer = React.createClass({
    handleClickDiet:function(info){
         dietItem[info.recipeId] = {
            'id':info.recipeId,
            'name':info.name,
            'image':info.image,
            'carbs':nutrition[info.recipeId].carbs,
            'calories':nutrition[info.recipeId].calories,
            'protein':nutrition[info.recipeId].protein,
            'fat':nutrition[info.recipeId].fat
        };
        console.log(dietItem);
        localStorage.setItem('dietItem',JSON.stringify(dietItem));
     //    var Orequest = new XMLHttpRequest();
     //    Orequest.onload =function(e){
     //    var ajaxdata = Orequest.response;
     //    dietItem[info.recipeId] = {
     //        'id':info.recipeId,
     //        'name':info.name,
     //        'image':info.image,
     //        'calcium':ajaxdata[0],
     //        'calories':ajaxdata[1],
     //        'protein':ajaxdata[6],
     //        'vitamin':ajaxdata[13]
     //    };
     //    localStorage.setItem('dietItem',JSON.stringify(dietItem));
     // };
     // Orequest.open('GET','http://api.cs50.net/food/3/facts?key=819a4a9a30d9c9a99e69caf23f4e54e7&recipe=' + info.recipeId + '&portion=1&output=json');
     // Orequest.responseType="json";
     // Orequest.send();
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
    getInitialState:function(){
        return dietItem
    },
    removeCard:function(recipeId){
        delete dietItem[recipeId];
            localStorage.setItem('dietItem',JSON.stringify(dietItem));
        this.replaceState(dietItem);
    },
    render:function(){
        return(
           <div>
                <Mydiet dietItem={dietItem} removeCard={this.removeCard}/>
           </div>
         );
    }
});
export  {Cardcontainer , Dietcontainer};



