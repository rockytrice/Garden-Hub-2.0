import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
    <Router>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </div>
    </Router>,
    document.getElementById('root')
  );
  registerServiceWorker();
