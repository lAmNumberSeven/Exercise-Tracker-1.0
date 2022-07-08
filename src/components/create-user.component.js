import React, {Component} from "react"
import axios from "axios"

export default class CreateUser extends Component{
 constructor(props){
  super(props)

  this.onChangeUsername = this.onChangeUsername.bind(this)
  this.onSubmit = this.onSubmit.bind(this)

  this.state ={
   username: ""
  }
 }

 onChangeUsername(e){
  this.setState({
   username: e.target.value
  })
 }

 onSubmit(e){
  e.preventDefault()

  const user ={
   username: this.state.username
  }

  console.log(user)

  axios.post('http://localhost:5000/users/add', user)
  .then(res => console.log(res.data))

  this.setState({
   username:""
  })
 }


 render(){
  return(
      <div className="m-5">
        <h3 className=" text-3xl">Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className=""> 
            <label>Username: </label>
            <input  type="text"
                required
                className="appearance-none rounded-non relative block
      w-full px-3 py-2 border border-gray-300
      placeholder-gray-500 text-gray-900 rounded-t-md focus:online-none
      focus: z-10 l mb-4"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
          </div>
        </form>
      </div>
  )
 }
}