import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAIlpXTVy3-W1Yx3X_9ss9JvvdyldSSinc",
  authDomain: "crud-react-c1d74.firebaseapp.com",
  databaseURL: "https://crud-react-c1d74.firebaseio.com",
  projectId: "crud-react-c1d74",
  storageBucket: "crud-react-c1d74.appspot.com"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
