'use strict';

import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Card from './components/card/Card.jsx';

const Models = React.createClass({
    render: function(){
     return(
      <div>
        <Navbar />
        <Card />
      </div>
        );
    }
});

render(< Models />, document.getElementById('app'));

