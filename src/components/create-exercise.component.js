import axios from "axios"
import React, {Component} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default class CreateExercise extends Component{
 constructor(props){
  super(props)

  this.onChangeUsername = this.onChangeUsername.bind(this)
  this.onChangeDescription = this.onChangeDescription.bind(this)
  this.onChangeDuration = this.onChangeDuration.bind(this)
  this.onChangeDate = this.onChangeDate.bind(this)
  this.onSubmit = this.onSubmit.bind(this)

  this.state = {
   username: "",
   description: "",
   duration: 0,
   date: new Date(),
   users: []
  }
 }

 componentDidMount(){
  axios.get('http://localhost:5000/users/')
  .then(response => {
   if(response.data.length > 0){
    this.setState({
     users: response.data.map(user => user.username),
     username: response.data[0].username,
    })
   }
  })
 }

 onChangeUsername(e){
  this.setState({
   username: e.target.value
  })
 }
onChangeDescription(e){
 this.setState({
  description: e.target.value
 })
}

onChangeDuration(e){
 this.setState({
  duration: e.target.value
 })
}

onChangeDate(date){
 this.setState({
  date: date
 })
}

onSubmit(e){
 e.preventDefault();

 const exercise = {
  username: this.state.username,
  description: this.state.description,
  duration: this.state.duration,
  date: this.state.date
 }

 console.log(exercise)

 axios.post('http://localhost:5000/exercises/add', exercise)
 .then(res => console.log(res.data))

 window.location = '/'
}

 render(){
  return(
   <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6     lg:px-8">
   <div className="max-w-md w-full space-y-8">
    <h3 className="mt-6 text-center font-extrabold">Create New Exercise Log</h3>
    <form className="mt-8 space-y-6" onSubmit={this.onSubmit}>
     <div>
      <label >Username: </label>
      <select ref="userInput"
      required
      className="appearance-none rounded-non relative block
      w-full px-3 py-2 border border-gray-300
      placeholder-gray-500 text-gray-900 rounded-t-md focus:online-none
      focus: z-10 " 
      value={this.state.username}
      onChange={this.onChangeUsername}
      >
       {
        this.state.users.map(function(user) {
         return <option
         key={user}
         value={user}>{user}</option>
        })
       }
      </select>
     </div>
     <div>
      <label>Description: </label>
      <input type="text"
       required
       className="
        appearance-none rounded-non relative block
        w-full px-3 py-2 border border-gray-300
        placeholder-gray-500 text-gray-900 rounded-t-md focus:online-none
        focus: z-10
        "
       value={this.state.description}
       onChange={this.onChangeDescription}
      />
     </div>
     <div>
      <label>Duration (in minutes): </label>
      <input
      type="text"
      className="
       appearance-none rounded-non relative block
       w-full px-3 py-2 border border-gray-300
       placeholder-gray-500 text-gray-900 rounded-t-md focus:online-none
       focus: z-10
       "
      value={this.state.duration}
      onChange={this.onChangeDuration}
      />
     </div>
     <div>
      <label>Date: </label>
      <div>
       <DatePicker
       selected={this.state.date}
       onChange={this.onChangeDate}
       className="appearance-none rounded-non relative block
       w-full px-3 py-2 border border-gray-300
       placeholder-gray-500 text-gray-900 rounded-t-md focus:online-none
       focus: z-10 mb-6"/>
      </div>
      <div>
       <input type="submit" value="Create Exercise Log" 
       className="group relative w-full flex justify-center py-2
       px-4 border border-transparent text-sm font-medium
       rounded-md text-white bg-indigo-600 hover:bg-indigo-700
       focus:online-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"/>
      </div>
     </div>
    </form>
    </div>
   </div>
  )
 }
}