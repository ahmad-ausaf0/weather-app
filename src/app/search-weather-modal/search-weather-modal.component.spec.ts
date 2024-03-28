import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWeatherModalComponent } from './search-weather-modal.component';

describe('SearchWeatherModalComponent', () => {
  let component: SearchWeatherModalComponent;
  let fixture: ComponentFixture<SearchWeatherModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWeatherModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchWeatherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
