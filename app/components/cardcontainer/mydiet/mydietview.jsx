'use strict';

import React from 'react';

const Mydietview =React.createClass({
    render:function(){
        return(
         <div className="pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1">
            <div className="dietcard">
                <div className="dietcard__image"></div>
                  <p className="dietcard__dishname">Dish name</p>
                    <div className="dietcard__nutrition">
                      <ul>
                      <li>calcium <span className="nutrition_values"> 48%</span></li>
                      <li>calories <span className="nutrition_values">  35%</span></li>
                      <li>protein <span className="nutrition_values"> 25%</span></li>
                      <li>vitamin <span className="nutrition_values"> 32%</span></li>
                      </ul>
                    </div>
                  <div className="dietcard__action">
                    <div className="dietcard__action_share">
                        <img src="./assets/images/share.svg" />share
                    </div>
                    <div className="dietcard__action_remove">- remove from my diet</div>
                 </div>
            </div>
         </div>      
          
        
    
        );
    }
});

export default Mydietview;

 <h2>calcium calories cholesterol protein vitamin Iron carbs fiber</h2>