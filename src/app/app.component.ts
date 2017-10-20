import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


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

	//constructor(private recipeService: RecipeService) { }	


	categories 	= ['Chicken', 'Sea Food', 'Pork'];
	levels		= ['Easy', 'Medium', 'Hard'];
	prepTimes	= ['15 Mins Or Less','30 Mins Or Less', '45 Mins Or Less',  '60 Mins Or Less', 'More Than An Hour Or Less'];
	totalTimes	= ['15 Mins Or Less','30 Mins Or Less', '45 Mins Or Less',  '60 Mins Or Less', 'More Than An Hour Or Less'];

	recipesFilterForm: FormGroup;

	constructor(private fb: FormBuilder, private recipeService: RecipeService){
		this.createForm();
	}

	createForm(){
		this.recipesFilterForm = this.fb.group({
			category: '',
			level: '',
			prepTime: '',
			totalTime: ''
		});
	}

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
