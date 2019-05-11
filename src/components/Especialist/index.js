import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import firebase from '../../firebase';
import Navbar from '../Navbar';


class Especialist extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Especialist');
    this.unsubscribe = null;
    this.state = {
        Especialist: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const Especialist = [];
    querySnapshot.forEach((doc) => {
      const { name, CRM, author } = doc.data();
      Especialist.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        CRM,
        author,
      });
    });
    this.setState({
     Especialist
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      
      <div class="container">
        <Navbar />
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Lista de Especialistas
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/especialistCreate" class="btn btn-primary">Adicionar Especialista</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CRM</th>
                  <th>IMG</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Especialist.map(Especialist =>
                  <tr>
                    <td><Link to={`/especialistShow/${Especialist.key}`}>{Especialist.name}</Link></td>
                    <td>{Especialist.CRM}</td>
                    <td>{Especialist.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     
      
    );
  }
}

export default Especialist;
