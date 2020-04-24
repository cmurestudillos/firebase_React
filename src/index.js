import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/css/styles.css';
import App from './App';
import * as serviceWorker from './services/serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaGithub } from 'react-icons/fa';

ReactDOM.render(
  <Router>
      <div>
        <div className="w3-top">
          <div className="w3-bar w3-red w3-card w3-left-align w3-large">
            <Link className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" to="/" ><FaHome /></Link>
            <Link className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" to="/create" ><FaPlus /></Link>
            <div className="float-right mt-2">
              <img src="img/reactjs.png" alt="React.js" width="35"/> - <img src="img/firebase.png" alt="Firebase" width="35"/>
            </div>
          </div>
        </div>  
        
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
        
        <footer className="fixed-bottom">
          <div className="fleft">
            <p className="font-weight-bold">Copyright &copy; 2019</p>
          </div>
          <div className="fright">
            <p className="font-weight-bold"><i>Developed by:</i> Carlos Mur <a href="https://github.com/cmurestudillos" rel="noopener noreferrer" title="Source"><FaGithub /></a> </p>
          </div>
      </footer> 
      </div>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
