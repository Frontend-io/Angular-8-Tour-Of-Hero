import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string[] = [];
  add(message:string){
    this.messages.push(message);
  }
  clear(message:number){
    this.messages.splice( message, 1);
  }
  constructor() { }
}
