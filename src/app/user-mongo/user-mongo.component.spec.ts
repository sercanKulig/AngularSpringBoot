import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMongoComponent } from './user-mongo.component';

describe('UserMongoComponent', () => {
  let component: UserMongoComponent;
  let fixture: ComponentFixture<UserMongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
