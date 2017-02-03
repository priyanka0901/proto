'use strict';

import React from 'react';
import Cardview from './Cardview.jsx'
import recipe from '../../../data/recipe.js';

const Card = React.createClass({
    handleClickCard:function(info){
        var that = this.props.handleClickDiet;
        return function(){
            that(info);
        }
    },
    createCard:function(data){
        return <Cardview name={data.name} image={data.image} key={data.recipe} recipeId={data.recipe} handleClickCardfunc={this.handleClickCard}/>;
    },
    createCards: function (recipe) {
    return recipe.map(this.createCard);
  },
 render: function(){
    return(
    <div className="pure-g card__container">
      {this.createCards(recipe)}
    </div>
        );
    },
});

export default Card;