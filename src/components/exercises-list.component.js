import React, {Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
const Exercise = props => (
 <tr className="text-center">
  <th scope="row" className="px-6 py-4">{props.exercise.username}</th>
  <td className="px-6 py-4">{props.exercise.description}</td>
  <td className="px-6 py-4 text-center">{props.exercise.duration}</td>
  <td className="px-6 py-4">{props.exercise.date.substring(0,10)}</td>
  <td className="px-6 py-4">
   <Link to={"/edit/" + props.exercise._id}>edit</Link>
   | <button onClick={() => {
    props.deleteExercise(props.exercise._id)
   }}>delete</button>
  </td>
 </tr>
)

export default class ExercisesList extends Component{
 constructor(props){
  super(props)

  this.deleteExercise = this.deleteExercise.bind(this)

  this.state = {exercises: []}

 }

 componentDidMount(){
  axios.get('http://localhost:5000/exercises/')
  .then(response =>
   this.setState({exercises: response.data}))
   .catch((error) =>{
    console.log(error)
   })
 }

 deleteExercise(id){
  axios.delete('http://localhost:5000/exercises/' + id)
  .then(res => console.log(res.data))
  
  this.setState({
   exercises: this.state.exercises.filter(el => el._id !== id)
  })
 }

 exerciseList(){
  return this.state.exercises.map(currentexercise =>{
   return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>
  })
 }
 render(){
  return(
      <div className="relative overflow-x-auto shadow-md">
        <h3 className="text-xl mb-2 font-semibold">Logged Exercises</h3>
        <table className="w-full text-sm text-left text-gray-500
        dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-6 py-3">Username</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Duration</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
  )
 }
}