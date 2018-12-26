import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  
  messages;
  message;
  firemsg:String;
  formValue;
  constructor(private chatService: ChatService) { }

 //  sendMessage(formValue): void {
 //     this.chatService.getResponse(this.formValue)
 //     .subscribe(data =>{
 //  		this.messages = data
 //  		// console.log(this.messages.result.fulfillment.speech)
 //  		this.message = this.messages.result.fulfillment.speech
 //  	 })
	// }

  ngOnInit() {
  }

  send(){
    this.chatService.sendMessage()
  }

  handSubmit(event){
    if(event.KeyCode == 13){
      this.send();
    }
  }
}
