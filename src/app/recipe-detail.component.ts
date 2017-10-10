import { Component, Input } from '@angular/core';
import { Recipe } from './recipe';

@Component({
	selector: 'recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./app.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
}
