import { connect } from 'react-redux';
import React, { Component } from 'react';

const API = 'https://api.github.com/users';
class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
	UserName: "",
	name:"",
	repos:"",
	followers:"",
	following:"",
	 
      }
    
	
}  
 fetchProfile(username)
 { 
 alert("Hi");
   
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          UserName: data.login,
          name: data.name,
          
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          notFound: data.message
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }
Hi()
{
        this.fetchProfile(this.state.UserName);
    }


   render() {
     return (
			
         <div>
            <form
		onSubmit={e => {  alert("Values Added"); this.Hi();  } }>
    
		
		<div class="form-row">

		<div class="col-12  col-md-5 mb-2 mb-md-0">
		<input
		required="required"
		name="firstname"
		class="form-control form-control-lg " 
		placeholder ='UserName'
		required pattern="[a-zA-Z]+"
		value={this.state.UserName} 
                onChange={e=>this.setState({UserName:e.target.value})}
                 />
		</div>
		</div>
		
    </form>
	<h1>Hi kashif</h1>
		
         </div>
		
      );
   }
}



export default Home;
