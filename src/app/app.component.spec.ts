import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent (templateUrl)', () => {

	let comp:    AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let de:      DebugElement;
	let el:      HTMLElement;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [ AppComponent ], // declare the test component
		})
		.compileComponents();  // compile template and css
	}));

  	// synchronous beforeEach
  	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);

		comp = fixture.componentInstance; // AppComponent test instance

		// query for the title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1'));
		el = de.nativeElement;
  	});

  	it('should display title set in component', () => {
		fixture.detectChanges();
		expect(el.textContent).toEqual(comp.title);
  	});
});