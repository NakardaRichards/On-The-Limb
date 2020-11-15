import app from "firebase/app";

const config = {
  apiKey: "AIzaSyDdtGndgmKceHL7oReB8uAVzYQ4rEFxm8k",
  authDomain: "nakardawebfinalreactspa.firebaseapp.com",
  databaseURL: "https://nakardawebfinalreactspa.firebaseio.com",
  projectId: "nakardawebfinalreactspa",
  storageBucket: "nakardawebfinalreactspa.appspot.com",
  messagingSenderId: "1083718609005",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
