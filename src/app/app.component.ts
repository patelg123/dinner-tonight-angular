import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';


@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [RecipeService]
})

export class AppComponent implements OnInit {
	title = 'Dinner Tonight !!';
	recipes: Recipe[];
	selectedRecipe: Recipe;

	constructor(private recipeService: RecipeService) { }	


	getRecipes(): void {
		this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
	}


	ngOnInit(): void {
    	this.getRecipes();
  	}

	onSelect(recipe: Recipe): void {
		this.selectedRecipe = recipe;
	}

}
