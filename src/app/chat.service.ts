import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

@Injectable()
export class ChatService {


  ref = firebase.firestore().collection('boards');

  private baseURLQuery = 'https://api.dialogflow.com/v1/query?v=20150910';
  private baseURLContext = 'https://api.dialogflow.com/v1/contexts?v=20150910';
  private token = '448457a85f984ce0abe0077592ddb304';

  constructor(private http: HttpClient ) {}

   getResponse(askquery) {
   	var headers = new HttpHeaders().set('Authorization','Bearer 448457a85f984ce0abe0077592ddb304');
    const data = {
      query : askquery,
      lang: 'en',
      sessionId: '12345'
    };
    return this.http.post(`${this.baseURLQuery}`, data,{ headers: headers});
  }


  // sendMessage(msg: string) {
  //   const email = this.user.email;
  //   this.chatMessages = this.getMessages();
  //   this.chatMessages.push({
  //     message: msg,
  //     userName: this.userName,
  //     email: email });
  // }

  
   sendMessage(): Observable<any> {

    let data = {
        message: 'testing new app',
        userName: 'prabhat new one ',
        email: 'prabhatsingh337@gmail.com'
        }

    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }


  // getBoards(): Observable<any> {
  //   return new Observable((observer) => {
  //     this.ref.onSnapshot((querySnapshot) => {
  //       let boards = [];
  //       querySnapshot.forEach((doc) => {
  //         let data = doc.data();
  //         boards.push({
  //           key: doc.id,
  //           title: data.title,
  //           description: data.description,
  //           author: data.author
  //         });
  //       });
  //       observer.next(boards);
  //     });
  //   });
  // }

  // getBoard(id: string): Observable<any> {
  //   return new Observable((observer) => {
  //     this.ref.doc(id).get().then((doc) => {
  //       let data = doc.data();
  //       observer.next({
  //         key: doc.id,
  //         title: data.title,
  //         description: data.description,
  //         author: data.author
  //       });
  //     });
  //   });
  // }

  // updateBoards(id: string, data): Observable<any> {
  //   return new Observable((observer) => {
  //     this.ref.doc(id).set(data).then(() => {
  //       observer.next();
  //     });
  //   });
  // }

  // deleteBoards(id: string): Observable<{}> {
  //   return new Observable((observer) => {
  //     this.ref.doc(id).delete().then(() => {
  //       observer.next();
  //     });
  //   });
  // }







}