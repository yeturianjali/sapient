import React,{Component} from 'react';
import './userdetails.css';
//import { format, render, cancel, register } from 'timeago.js';
import $ from "jquery";
import _ from 'lodash';

class Userdetails extends Component{
	
state = {
    isLoading: true,
    users: [],
    error: null,
	value: 'sort',
	female: false,
	male: false,
	checked: {},
  };

 
  handelechange=(e)=>{	  
	  const value = e.target.value;	  
	  const users = this.state.users;
		console.log(users);	  		
		/*const dsc = users.sort((a, b) => {
			if(a.id > b.id){	
				console.log("true");
				return -1;
			}
		});
		console.log(dsc,"descending");*/
		switch(value){
			case "asc":
			this.setState({
			  users: users.sort((a, b) => {
						if(a.id < b.id){	
							console.log("true");
							return 1;
						}
					})
				});		
			break;
			case "dse":
			this.setState({
			  users: users.sort((a, b) => {
						if(b.id < a.id){	
							console.log("true");
							return 1;
						}
					})
			});		
			break;
		}		
		
  }
  
 
	handleChange=(evt)=> {	  
	console.log('dhfhdsfh', evt.target.value);
	//console.log('user', this.state.users);
	let currentArray= this.state.users;
	console.log(currentArray);
	let newArray = currentArray.filter(evt.target.name);
	console.log(newArray);
	
	
	//var newArray = this.state.users.slice();
	//newArray = this.state.users.filter(evt.target.value);
    //console.log(newArray);
		//this.state.users.filter(data => {
		//if(data.gender ===  )
		//})
	/*let res = this.state.users.reduce((acc, {gender, species, name, image, id,  created, status  }) =>
	{	
		gender.includes(evt.target.value) && acc.push({gender, species, name, image, id,  created, status});
		return acc;
	}, []);	*/	
	
	//console.log("res", res)
	/*this.setState({
		users: res
	})*/
 }


 fetchUsers() {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then(response => response.json())
      .then(data => {	
        this.setState({
          users: data.results,
          isLoading: false,
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, users, error , value} = this.state;
	console.log('user2222222222', this.state.users)
    return (
	
    <React.Fragment>
		<div className="check">
		<h3>Gender</h3>
	<div>
      <div><input type="checkbox" name="gender" value="Male" id="male"  onChange={(e)=>this.handleChange(e)}/>
	  <label htmlFor="male">Male</label></div>
      <div>
	  <input type="checkbox" name="gender" value="Female" id="female"  onChange={(e)=>this.handleChange(e)}/>
	  <label htmlFor="female">Female</label></div>
    </div>
    <h3>Species</h3>
    /*<div>
      <div><input type="checkbox" name="species" value="human" id="human"  onChange={this.handleChange}/>
	  <label htmlFor="human">Human</label></div>
    </div>
	<div>
      <div><input type="checkbox" name="species" value="mytholog" id="mytholog"  onChange={this.handleChange}/>
	  <label htmlFor="mytholog">Mytholog</label></div>
    </div>	
    <h3>Origin</h3>
    <div> 
      <div><input type="checkbox" name="origin" value="unknown" id="unknown"  onChange={this.handleChange}/>
	  <label htmlFor="unknown">Unknown</label></div>
      <div><input type="checkbox" name="origin" value="eart" id="eart" onChange={this.handleChange} />
	  <label htmlFor="eart">Eart</label></div>    
    </div>
	*/
	</div>
	<div className="row">	
		<select id="show" onChange={this.handelechange}>
			<option value="sort">sort</option>
			<option value="asc">asc</option>
			<option value="dse">dse</option>
		</select>
	<div className="text-cont">
	  {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {	
            return (		

              <div className={`column player ${user.gender} ${user.species} `}  key={user.id}>
                  <img src={user.image}/> 
                <p>Name: {user.name}</p> 
				<p>id: {user.id}</p>
				<p>Created:{user.created}</p>
				<div>
				<p>Status:{user.status}</p>
				<p>Species:{user.species}</p>
				<p>Gender:{user.gender}</p>
				</div>
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
		</div>
		</div>
      </React.Fragment>
    );
  }
  
}

export default Userdetails;