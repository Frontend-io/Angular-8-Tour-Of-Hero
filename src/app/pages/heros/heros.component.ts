import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/hero";

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
  
 
  heros: Hero[] = [
    { id: 1, name: "Jefferson",image: 4,description: "A little text for here's description"},
    { id: 2, name: "Aron", image: 5, description: "Hero two's description"},
    { id: 11, name: 'Dr Nice', image: 4, description: 'Lo ad minim veniamquis nostrud exerci ' },
    { id: 12, name: 'Narco', image: 6, description: 'nim veniamquis nostrud exerc ' },
    { id: 13, name: 'Bombasto', image: 8, description: '  ad minim veniamquis nostrunim veniamquis nostrud exerc' },
    { id: 14, name: 'Celeritas', image: 9, description: '  ad minim veniamquis nostru' },
    { id: 15, name: 'Magneta', image: 10, description: 'd minim veniamquis nostru ' },
    { id: 16, name: 'RubberMan', image: 4, description: ' d minim veniamquis nostru' },
    { id: 17, name: 'Dynama', image: 5, description: 'd minim veniamquis nostru ' },
    { id: 18, name: 'Dr IQ' , image: 6, description: 'd minim veniamquis nostru '},
    { id: 19, name: 'Magma', image: 9, description: 'd minim veniamquis nostru ' },
    { id: 20, name: 'Tornado', image: 8, description: 'd minim veniamquis nostru ' }
  ];
  // Show the edit form if user wants to edit hero's name
  wantToEdit:boolean = false;
  showForm(){
    (!this.wantToEdit) ? this.wantToEdit = true: this.wantToEdit = false;
  }
  
  constructor() {
    if (this.selectedHero == undefined) {
      this.isEmpty = true;
    }else{
      this.isEmpty =false
    }

   }

  ngOnInit() {
  }

}
