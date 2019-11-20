import { Injectable } from '@angular/core';

import { Hero } from "../models/hero";
import { HEROES } from "../models/mock-hero";
import { Observable, of } from "rxjs";
import { MessagesService } from "../messages.service";

@Injectable({
  providedIn: 'root',
})

export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
 
  constructor(private messagesService: MessagesService) {
    this.messagesService.add("HeroService fetched heroes");
    this.messagesService.add("Heroes fetched!");
    setTimeout(() => {
      this.messagesService.add("Heroes!");
    }, 2000);
   }

}