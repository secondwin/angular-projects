import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Sake nigiri', 'Organic, non-GMO, grassfed Sushi rice.', 'http://thesushibar.gr/wordpress/wp-content/uploads/2013/12/sake-nigiri.jpg'),
    new Recipe('Tuna nigiri', 'Organic, non-GMO, grassfed Sushi rice.', 'http://static.wixstatic.com/media/aad622_a10ab9bc4de341bc8c08cdf5e73a625c.jpg'),
  ];
  @Output() recipeSelection = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelection.emit(recipe);
  }
}
