'use strict';

import React from 'react';

const Mydietview =React.createClass({
    render:function(){
        return(
         <div className="pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1">
            <div className="dietcard">
                <div className="dietcard__image" style={{backgroundImage:"url(" + this.props.data.image + ")"}}></div>
                  <p className="dietcard__dishname">{this.props.data.name}</p>
                    <div className="dietcard__nutrition">
                      <ul>
                      <li>calcium 
                        <span className="nutrition_values"> 
                         {this.props.data.calcium.percent}%
                        </span>
                      </li>
                      <li>calories 
                        <span className="nutrition_values">  
                         {this.props.data.calories.percent}%
                        </span>
                      </li>
                      <li>protein 
                        <span className="nutrition_values"> 
                          {this.props.data.protein.percent}%
                        </span>
                      </li>
                      <li>vitamin
                        <span className="nutrition_values"> 
                        {this.props.data.vitamin.percent}%
                        </span>
                      </li>
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

