'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Navbar from './components/navbar/Navbar.jsx';
import {Cardcontainer, Dietcontainer} from './components/cardcontainer/Cardcontainer.jsx';

const Layout = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar />
               {/* Render active Route or indexRoute */}
                {this.props.children}
            </div>
        );
    }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
     <IndexRoute component={Cardcontainer} />
     <Route path="/mydiet" component={Dietcontainer} />
    </Route>
  </Router>
), document.getElementById('app'));