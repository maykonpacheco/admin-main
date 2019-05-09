import React, { Component } from 'react';

import './styles.css';

class Navbar extends Component {
    render() {
        return(
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <div class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand">Admim</h3>
      <nav class="nav nav-masthead justify-content-center">
        <a class="nav-link active" href="#">Consultas</a>
        <a class="nav-link" href="#">Especialistas</a>
      </nav>
    </div>
  </div>
  </div>

        );
    }
}

export default Navbar;