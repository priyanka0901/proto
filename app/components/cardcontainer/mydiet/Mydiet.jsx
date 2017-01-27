'use strict';

import React from 'react';
import Mydietview from './mydietview.jsx';

const Mydiet= React.createClass({
   createCard:function(data){
    return <Mydietview name={data.name} image={data.image} recipeId={data.id} key={data.id} />;  
  },
  createCards:function(items){
    var cardBox = [];
    for (var item in items) {
        cardBox.push(this.createCard(items[item]));
        console.log(items);
    };
    return cardBox;
  },

    render:function(){
        var dietItem = this.props.dietItem;
        return(
           <div className="pure-g">
             {this.createCard(dietItem)}
           </div>
        );
    }
});
export default Mydiet;