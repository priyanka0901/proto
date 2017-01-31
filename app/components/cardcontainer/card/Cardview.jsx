'use strict';

import React from 'react';
import FacebookProvider, { Share } from 'react-facebook';

const Cardview = React.createClass({
    render:function(){
       var shareme = 'http://www.facebook.com/sharer.php?u=priyanka0901.github.io&title=' + this.props.name + '&picture=' + this.props.image + '&description=hello';
       return(
        <div className="pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1">
         <div className="card">
           <div className="card__image" style={{backgroundImage:"url(" + this.props.image + ")"}}></div>
            <div className="card__content">
              <p className="card__dishname">{this.props.name}</p>
              <div className="card__action">
                <div className="card__action_share">
                  <a href={shareme} target="_blank">
                    <img src="./assets/images/share.svg"/>Share
                  </a>
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