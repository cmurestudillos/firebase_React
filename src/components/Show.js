import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaMinusCircle } from 'react-icons/fa';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('articulos').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("Registro no encontrado.");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('articulos').doc(id).delete().then(() => {
      console.log("Registro eliminado correctamente.");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error al eliminar registro: ", error);
    });
  }

  render() {
    return (
      <main>
        <p className="container border">
          <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="row">
              <div className="col"><p className="display-4"><strong>Autor: </strong>{this.state.board.author}</p></div>
              <div className="col text-right">
                <h4>
                  <Link to="/"><button className="btn btn-outline-danger" title="Volver"><FaArrowLeft /></button></Link></h4></div>
            </div>
            <div className="card">
              <div className="card-body lead">
                <p className="titulo">{this.state.board.title}</p>
                <p className="descripcion">{this.state.board.description}</p>
                <Link to={`/edit/${this.state.key}`}><button className="btn btn-outline-warning" title="Modificar"><FaEdit /></button></Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-outline-danger" title="Eliminar"><FaMinusCircle /></button>
              </div>
            </div>              
          </div>        
        </p>
      </main>
    );
  }
}

export default Show;
