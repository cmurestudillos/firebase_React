import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import '../css/styles.css';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      description: '',
      author: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('articulos').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          title: board.title,
          description: board.description,
          author: board.author
        });
      } else {
        console.log("Documento no encontrado.");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    const updateRef = firebase.firestore().collection('articulos').doc(this.state.key);
    updateRef.set({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error al añadir el registro: ", error);
    });
  }

  render() {
    return (
      <main>
        <p className="container border">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <p className="accion">Modificacion del Registro</p>
              <div className="col text-right">
                <h4>
                  <Link to={`/show/${this.state.key}`}><button className="btn btn-outline-danger"><FaArrowLeft /></button></Link>
                  </h4>
              </div>                
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label for="author">Autor:</label>
                  <input type="text" className="form-control" name="author" value={this.state.author} onChange={this.onChange} placeholder="Autor..." />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label for="title">Titulo:</label>
                  <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Titulo..." />
                </div>
                <div className="form-group">
                  <label for="description">Descripcion:</label>
                    <textArea type="text" className="form-control" name="description" onChange={this.onChange} placeholder="Descripcion..." cols="80" rows="3">{this.state.description}</textArea>
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

export default Edit;
