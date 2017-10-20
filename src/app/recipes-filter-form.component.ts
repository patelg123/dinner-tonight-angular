import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
	selector: 'recipes-filter-form',
	templateUrl: './recipes-filter-form.component.html',
	styleUrls: ['./app.component.css']
})

export class RecipesFilterFormComponent {
	
	categories = ['Chicken', 'Sea Food', 'Pork'];

	recipesFilterForm: FormGroup;

	constructor(private fb: FormBuilder){
		this.createForm();
	}

	createForm(){
		this.recipesFilterForm = this.fb.group({
			category: '',
		});
	}	
}