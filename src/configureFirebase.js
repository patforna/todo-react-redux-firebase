import firebase from 'firebase';

const configureFirebase = () => {
  const config = {
    apiKey: 'AIzaSyAHixDkPBJa3r17PmdP0yUIrzwmB48YupE',
    authDomain: 'todo-43b4e.firebaseapp.com',
    databaseURL: 'https://todo-43b4e.firebaseio.com',
    storageBucket: 'todo-43b4e.appspot.com',
    messagingSenderId: '248331773726',
  };
  firebase.initializeApp(config);
  firebase.auth().signInAnonymously();
};

export default configureFirebase;
