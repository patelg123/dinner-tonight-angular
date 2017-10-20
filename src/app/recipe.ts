export class Recipe{
	id: number;
	title: string;
	category: string;
	level: string;
	prepTime: number;
	totalTime: number;
	ingredients: Array<{item: string}>;
	steps: Array<{step: string}>
}