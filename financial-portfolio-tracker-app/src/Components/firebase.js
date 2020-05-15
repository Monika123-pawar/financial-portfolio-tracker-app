 import firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyCMN36y2tQtKo8yI4K_nKWlUyw_h3OW8uI",
    authDomain: "financial-portfolio-trac-3ec87.firebaseapp.com",
    databaseURL: "https://financial-portfolio-trac-3ec87.firebaseio.com",
    projectId: "financial-portfolio-trac-3ec87",
    storageBucket: "financial-portfolio-trac-3ec87.appspot.com",
    messagingSenderId: "518324318280",
    appId: "1:518324318280:web:1c21818efb873c61c1287d"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;