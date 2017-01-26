'use strict';

import React from 'react';

const Cardview = React.createClass({
    render:function(){
       return(
        <div className="pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1">
         <div className="card">
           <div className="card__image" style={{backgroundImage:"url(" + this.props.image + ")"}}></div>
            <div className="card__content">
              <p className="card__dishname">{this.props.name}</p>
              <div className="card__action">
                <div className="card__action_share">
                    <img src="./assets/images/share.svg" />Share
                </div>
                <div className="card__action_add" onClick={this.props.handleClickCardfunc(this.props)}>
                 + Add to my diet 
                </div>
                </div>
          </div>
         </div>
       </div>
        );
    }
});

export default Cardview;