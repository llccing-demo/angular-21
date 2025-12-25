import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryElements } from './query-elements';

describe('QueryElements', () => {
  let component: QueryElements;
  let fixture: ComponentFixture<QueryElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryElements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryElements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
