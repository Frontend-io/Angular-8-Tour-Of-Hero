import { Component, OnInit } from '@angular/core';
import { Hero } from "../../models/hero";
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  isEmpty: boolean;

  // List of selected hero
  selectedHero: Hero;
  showSelectedHero(hero:Hero){
    this.isEmpty = false;
    this.selectedHero = hero
  };
   // Returns bool if the list is empty
 
  hideShow(){
    this.isEmpty = true;
  }
  
 
  heros: Hero[] ;

  // Show the edit form if user wants to edit hero's name
  wantToEdit:boolean = false;
  showForm(){
    (!this.wantToEdit) ? this.wantToEdit = true: this.wantToEdit = false;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heros => this.heros = heros);
  }

  constructor(private heroService: HeroService) {
    if (this.selectedHero == undefined) {
      this.isEmpty = true;
    }else{
      this.isEmpty = false
    }    

  }


  ngOnInit() {
    this.getHeroes()
  }

}
