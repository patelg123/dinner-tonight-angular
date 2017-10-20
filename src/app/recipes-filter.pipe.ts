import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'recipeFilter' })

@Injectable()
export class RecipesFilterPipe implements PipeTransform {
	transform( recipes: any[], category: string, level: string, prepTime: string, totalTime: string ) : any[] {



        if (!recipes) return [];
        
        if (!category && !level && !prepTime && !totalTime) return [];


        let filtered_recipes = recipes;

        if(category){
            filtered_recipes = filtered_recipes.filter(it => it['category'] == category);
        }

        if(level){
            filtered_recipes =  filtered_recipes.filter(it => it['level'] == level);
        }

        if(prepTime){
            if( prepTime === '15 Mins  Or Less'){
                filtered_recipes =  filtered_recipes.filter(it => it['prepTime'] <= 15); 
            } else if ( prepTime === '30 Mins Or Less'){
                filtered_recipes =  filtered_recipes.filter(it => it['prepTime'] <= 30); 
            } else if ( prepTime === '45 Mins Or Less'){
                filtered_recipes =  filtered_recipes.filter(it => it['prepTime'] <= 45); 
            } else if ( prepTime === '60 Mins Or Less'){
                filtered_recipes =  filtered_recipes.filter(it => it['prepTime'] <= 60); 
            } else if ( prepTime === 'More Than An Hour Or Less'){
                filtered_recipes =  filtered_recipes.filter(it => it['prepTime'] < 1000); 
            }
        }

//['15 Mins Or Less','30 Mins Or Less', '45 Mins Or Less',  '60 Mins Or Less', 'More Than 60 Mins'];

        if(totalTime){
            if( totalTime === '15 Mins Or Less'){
                filtered_recipes =  filtered_recipes.filter(it => it['totalTime'] <= 15); 
            } else if ( totalTime === '30 Mins Or Less'){
                filtered_recipes =  filtered_recipes.filter(it => it['totalTime'] <= 30); 
            } else if ( totalTime === '45 Mins  Or Less'){
                filtered_recipes =  filtered_recipes.filter(it => it['totalTime'] <= 45); 
            } else if ( totalTime === '60 Mins Or Less'){
                filtered_recipes =  filtered_recipes.filter(it => it['totalTime'] <= 60); 
            } else if ( totalTime === 'More Than An Hour Or Less'){
                filtered_recipes =  filtered_recipes.filter(it => it['totalTime'] < 1000); 
            }

        }




        return filtered_recipes; 

        //return recipes.filter(it => it['category'] == category);



	}




}
