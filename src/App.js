import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../src/css/styles.css';
import firebase from './Firebase';

function Archor(props) {
    return (
    <div className = "w3-third w3-center" >
        <i className = "fa fa-anchor w3-padding-64 w3-text-red" > </i>
    </div>    
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('articulos');
        this.unsubscribe = null;
        this.state = {
            boards: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
            const { title, description, author } = doc.data();
            boards.push({
                key: doc.id,
                doc,
                title,
                description,
                author,
            });
        });
        this.setState({
            boards
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
        <div className = "w3-row-padding w3-padding-64 w3-container" > {
            this.state.boards.map(board =>
            <div key = { board.key } className = "w3-content" >
                <div className = "w3-twothird" >
                    <h1 > { board.author } </h1>
                    <h5 className = "w3-padding-32" > <Link to = { `/show/${board.key}` } > { board.title } </Link>
                    </h5 >
                    <p className = "w3-text-grey"> { board.description } </p> 
                </div> 
                <Archor />
            </div>
            )
    } </div>
        );
    }
}

export default App;