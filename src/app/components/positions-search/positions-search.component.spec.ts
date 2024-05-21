import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsSearchComponent } from './positions-search.component';

describe('PositionsSearchComponent', () => {
  let component: PositionsSearchComponent;
  let fixture: ComponentFixture<PositionsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
