'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Navbar from './components/navbar/Navbar.jsx';
import {Cardcontainer, Dietcontainer} from './components/cardcontainer/Cardcontainer.jsx';
import {ShareButtons,ShareCounts,generateShareIcon} from 'react-share';

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
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
     <IndexRoute component={Cardcontainer} />
     <Route path="/mydiet" component={Dietcontainer} />
     <Route path="*" component={Dietcontainer} />
    </Route>
  </Router>
), document.getElementById('app'));