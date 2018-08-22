import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyDt2GFLVyIX9WV5ZfMRlaFRnVM8as_Prvo",
  authDomain: "moments-f8a39.firebaseapp.com",
  databaseURL: "https://moments-f8a39.firebaseio.com",
  projectId: "moments-f8a39",
  storageBucket: "moments-f8a39.appspot.com",
  messagingSenderId: "89180780233"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
