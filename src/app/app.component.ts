import { Component } from '@angular/core';
import { Recipe } from './recipe';

const RECIPES: Recipe[] = [
	{ 
		id: 1,
		title: 'Slow Cooker Chicken Thighs',
		category: 'Chicken',
		level: 'Easy',
		prep_time: 15,
		total_time: 180,
		ingredients: [
						{ item: `1 tbsp. extra-virgin olive oil`},
						{ item: `6 bone-in or boneless chicken thighs`},
						{ item: `salt`},
						{ item: `Freshly ground black pepper`},
						{ item: `1/2 c. low-sodium soy sauce`},
						{ item: `1/2 c. ketchup`},
						{ item: `1/4 c. honey`},
						{ item: `3 cloves garlic, minced`},
						{ item: `1/2 oz. freshly chopped ginger`},
						{ item: `2 tbsp. sriracha`},
						{ item: `Juice of 1 lime`},
						{ item: `Rice`},
						{ item: `Freshly chopped cilantro`}
		],
		steps: [
					{ step: `In a cast-iron skillet over medium-high heat, heat oil. Season chicken thighs with salt and pepper and sear until golden, 3 minutes per side. Transfer chicken thighs to slow cooker.`}, 
					{ step: `Whisk together soy sauce, ketchup, honey, garlic, ginger, Sriracha, and lime juice. Pour sauce over chicken and toss to combine.`},
					{ step: `Cover and cook until no longer pink, on low for 6 hours or high for 2 hours. Serve with rice and garnish with cilantro.`}
		]
	},

	{ 
		id: 2,
		title: 'Barbecue Pulled Pork Shepherds Pie',
		category: 'Pork',
		level: 'Medium',
		prep_time: 20,
		total_time: 35,
		ingredients: [
						{ item: `2 lb. red potatoes` },
						{ item: `1/2 packet ranch seasoning mix` },
						{ item: `2/3 c. sour cream` },
						{ item: `1 lb. pulled pork` },
						{ item: `1 bottle barbecue sauce` },
						{ item: `1 can corn, juices drained` },
						{ item: `1 c. shredded Cheddar cheese` },
						{ item: `1 bunch scallions, diced` }
		],
		steps: [
					{ step: `Preheat oven to 400 Degrees.` },
					{ step: `Make the ranch mashed potatoes: Peel potatoes and cut into 1" pieces, then place pieces in a large saucepan and cover with water. Bring water to boil and cook until potatoes are tender when pierced with a fork, about 10 minutes. Drain and place in a large bowl.` },
					{ step: `Add ranch seasoning and sour cream and mash potatoes until the mixture is thoroughly combined and most of the lumps are gone. Set aside.` },
					{ step: `Toss pulled pork with barbecue sauce (as much or as little as you'd like to use).` },
					{ step: `Add it to a large casserole dish, smoothing it to create one even layer. Top with corn, then add a layer of mashed potatoes.` },
					{ step: `Cover with shredded cheese and scallions.` },
					{ step: `Bake in the oven for 14 to 16 minutes, or until cheese has melted.`}
		]
	},

	{ 
		id: 3,
		title: 'Spicy Shrimp with Creamy Polenta',
		category: 'Sea Food',
		level: 'Hard',
		prep_time: 20,
		total_time: 40,
		ingredients: [
						{ item: `salt` },
						{ item: `1 c. polenta or yellow cornmeal` },
						{ item: `2 tbsp. butter` },
						{ item: `1/3 c. freshly grated Parmesan` },
						{ item: `1/3 c. freshly grated Asiago` },
						{ item: `2 tbsp. extra-virgin olive oil` },
						{ item: `3 cloves garlic, minced` },
						{ item: `1/2 tsp. crushed red pepper flakes, plus more for garnish` },
						{ item: `3 green onions, thinly sliced, whites and greens separated` },
						{ item: `1 pt. grape tomatoes, halved` },
						{ item: `1 lb. medium shrimp, peeled and deveined (tails left on, if desired)` },
						{ item: `2 tsp. fresh thyme leaves` },
						{ item: `1/2 c. dry white wine` },
						{ item: `1/2 c. chicken stock` },
						{ item: `2 tbsp. heavy cream` }
		],
		steps: [
					{ step: `In a medium, heavy-bottomed saucepan, bring salt and 4 cups water to a boil. Add polenta in a slow, steady stream, whisking constantly. Continue to whisk 2 minutes more, then reduce heat and simmer, covered, 20 minutes, whisking occasionally. Remove from heat and whisk in butter and cheese, then season with salt.` },
					{ step: `In a large skillet over medium-high heat, heat oil. Add garlic, red pepper flakes, and green onion whites and cook, stirring occasionally, until fragrant, 2 minutes. Add tomatoes and cook until soft, stirring, 4 minutes.` },
					{ step: `Add shrimp and thyme and cook until shrimp are completely pink, stirring, 4 minutes, then season with salt and pepper. Add wine and chicken stock and bring to a boil, then reduce heat to low and simmer until liquid is reduced by half, 2 to 3 minutes. Stir in cream and simmer 2 minutes more.` },
					{ step: `Serve shrimp over polenta and garnish with remaining green onion greens.` }
		]
	}
]


@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'Dinner Tonight !!';
	recipes = RECIPES;
}
