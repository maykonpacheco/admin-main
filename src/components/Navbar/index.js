import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

class Navbar extends Component {
    render() {
        return(
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <div class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand">Admim</h3>
      <nav class="nav nav-masthead justify-content-center">
        <Link class="nav-link active" to="/">Consultas</Link>
        <Link class="nav-link active" to='/Especialist' >Especialistas</Link>
      </nav>
    </div>
  </div>
  </div>

        );
    }
}

export default Navbar;