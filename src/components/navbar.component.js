import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="mx-auto maw-w-screen-xl bg-gray-700 text-white p-3 rounded-sm">
        <div className="container flex items-center justify-between">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="">
        <ul className="flex items-center gap-6">
          <li className="flex items-center">
          <Link to="/" className="flex items-center">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>
    );
  }
}