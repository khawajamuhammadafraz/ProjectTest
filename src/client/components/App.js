import React from 'react';
import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import Show from './Show.js';
import Home from './Home.js';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
class App extends React.Component {

styles() {
return {
navlink: {
	color: 'white'
}
};
}


constructor(props) {
    super(props)
   
    this.goHome = this.goHome.bind(this)
    
  
  }

  goHome() {
    this.context.router.push('/Show')
  }
  
  render() {
   const styles = this.styles();
    return (

       <BrowserRouter>
        <div>
  
																		 <div>
																		    <span class="btn btn-primary"><NavLink style={styles.navlink} to="/">Home</NavLink></span>
																		    <span class="btn btn-primary"><NavLink style={styles.navlink} to="/Show">Show</NavLink></span>
																		  </div>
          <div className="content">
            <Route exact={true} path="/" component={Home}/>
            <Route path="/Show" component={Show}/>
            
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

