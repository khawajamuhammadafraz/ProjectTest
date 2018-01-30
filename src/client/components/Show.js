import { connect } from 'react-redux';
import React, { Component } from 'react';


class Show extends Component {
 
   render() {
let { UserName } = this.props.params;
     return (
			
         <div>
            <h1>{Usname} </h1>
         </div>
		
      );
   }
}



export default Show;
