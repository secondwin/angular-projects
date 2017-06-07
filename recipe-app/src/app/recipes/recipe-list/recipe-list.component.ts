import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Sake nigiri', 'Organic, non-GMO, grassfed Sushi rice.', 'http://thesushibar.gr/wordpress/wp-content/uploads/2013/12/sake-nigiri.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
