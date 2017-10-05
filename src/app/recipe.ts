export class Recipe{
	id: number;
	title: string;
	category: string;
	level: string;
	prep_time: number;
	total_time: number;
	ingredients: Array<{item: string}>;
	steps: Array<{step: string}>
}