import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipesFilterFormComponent } from './recipes-filter-form.component';
import { RecipesFilterPipe } from './recipes-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    RecipesFilterFormComponent,
    RecipesFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
