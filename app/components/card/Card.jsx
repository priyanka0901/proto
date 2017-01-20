'use strict';

import React from 'react';
const Card = React.createClass({
 render: function(){
    return(
        <div className="card">
           <div className="pure-g">
             <div className="pure-u-1-3">
                <div className="card__image">
                </div>
            </div>

             <div className="pure-u-2-3">
                <div className="card__content">
                  <p className="card__dishName">dish name </p>
                  <ul>
                      <li>Calories</li>
                      <li>Fat</li>
                      <li>Carbs</li>
                      <li>Protein</li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
        );
    }
});

export default Card;