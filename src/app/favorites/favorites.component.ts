import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  inputs : ['isFavorite']
})
export class FavoritesComponent implements OnInit {
  @Output('changed') click = new EventEmitter();
  @Input('is-favorite') isFavorite :boolean =  true;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite = !this.isFavorite 
    this.click.emit({
      
      newState: this.isFavorite
    });
    console.log(this.isFavorite)
    
     

}
}
