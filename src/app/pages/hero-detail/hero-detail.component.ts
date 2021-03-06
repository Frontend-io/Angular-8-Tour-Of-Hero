import { Component, OnInit, Input } from '@angular/core';
// import { HerosComponent } from "../heros/heros.component";
import { Hero } from "../../models/hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() public hero: Hero;

  
  constructor() { }

  ngOnInit() {
  }

}
