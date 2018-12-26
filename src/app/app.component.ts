import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
    apiKey: "AIzaSyDfepP6e1g52WL5e1-3IpYVpVE9jGzlWwo",
    authDomain: "chattest-29a77.firebaseapp.com",
    databaseURL: "https://chattest-29a77.firebaseio.com",
    projectId: "chattest-29a77",
    storageBucket: "",
    messagingSenderId: "643428391068"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbot';

  ngOnInit() {
    firebase.initializeApp(config);
  }
}


