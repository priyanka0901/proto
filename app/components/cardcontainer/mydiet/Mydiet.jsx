'use strict';

import React from 'react';
import Mydietview from './mydietview.jsx';

const Mydiet= React.createClass({
   createCard:function(data){
    return <Mydietview data={data} key={data.id}/>;  
  },
  createCards:function(items){
    var cardBox = [];
    for (var item in items) {
        cardBox.push(this.createCard(items[item]));
    };
    return cardBox;
  },

    render:function(){
        var dietItem = this.props.dietItem;
        return(
           <div className="pure-g mydiet__container">
             {this.createCards(dietItem)}
           </div>
        );
    }
});
export default Mydiet;