
import React from 'react';
import "./index.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component"

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Routes>
        <Route path="/" element={<ExercisesList/>}/>
        <Route path="/edit/:id" element={<EditExercise/>}/>
        <Route path="/create" element={<CreateExercise/>}/>
        <Route path="/user" element={<CreateUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;