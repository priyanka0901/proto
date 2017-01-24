'use strict';

import React from 'react';

const Cardview = React.createClass({
    render:function(){
       return(
         <div className="card">
           <div className="card__image">
            </div>
            <div className="card__content">
              <p className="card__dishName">dish name</p>
              <div className="card__action">
                <div className="card__action_share">
                    <img src="./assets/images/share.svg" />Share
                </div>
                <div className="card__action_add">+ Add to my diet </div>
                </div>
          </div>
     </div>
        );
    }
});

export default Cardview;