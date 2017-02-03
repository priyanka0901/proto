'use strict';

import React from 'react';

const Mydietview =React.createClass({
    render:function(){
        var shareme = 'http://www.facebook.com/sharer.php?u=priyanka0901.github.io&title=' + this.props.data.name + '&picture=' + this.props.data.image + '&description=hello';
        return(
         <div className="pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1">
            <div className="dietcard">
                <div className="dietcard__image" style={{backgroundImage:"url(" + this.props.data.image + ")"}}></div>
                  <p className="dietcard__dishname">{this.props.data.name}</p>
                    <div className="dietcard__nutrition">
                      <ul>
                      <li>fat
                        <span className="nutrition_values"> 
                         {this.props.data.fat.percent}%
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
                      <li>carbs
                        <span className="nutrition_values"> 
                        {this.props.data.carbs.percent}%
                        </span>
                      </li>
                      </ul>
                    </div>
                  <div className="dietcard__action">
                    <div className="dietcard__action_share">
                      <a href={shareme} target="_blank">
                        <img src="./assets/images/share.svg" />share
                      </a>
                    </div>
                    <div className="dietcard__action_remove" onClick={this.props.removeCard(this.props.data.id)}>- remove </div>
                 </div>
            </div>
         </div>      
          
        
    
        );
    }
});

export default Mydietview;

