import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import '../css/styles.css';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('articulos');
    this.state = {
      title: '',
      description: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error al añadir el registro: ", error);
    });
  }

  render() {
    const { title, description, author } = this.state;
    return (
      <main>
      <p className="container border">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col">
              <p className="accion">Alta de Registros</p>
            </div>
            <div className="col text-right">
              <h4><Link to="/"><button className="btn btn-outline-danger btnvolver" title="Volver"><FaArrowLeft /></button></Link></h4></div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label for="author">Autor:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Autor..." />
              </div>    
            </div>
            <div className="col">
              <div className="form-group">
                <label for="title">Titulo:</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Titulo..." />
              </div>                   
              <div className="form-group">
                <label for="description">Descripcion:</label>
                <textArea className="form-control" name="description" onChange={this.onChange} placeholder="Descripcion..." cols="80" rows="3">{description}</textArea>
              </div>
            </div>
          </div>  
          <div className="fleft">
            <Link to="/"><button type="button" className="btn btn-outline-danger mt-3"><IoIosClose /></button></Link> 
          </div>              
          <div className=" fright">
            <button type="submit" className="btn btn-outline-success mt-3"><FaCheck /></button>
          </div>
        </form>
      </p>
      </main>
    );
  }
}

export default Create;
