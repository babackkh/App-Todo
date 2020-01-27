import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWrapComponent } from './todo-wrap.component';

describe('TodoWrapComponent', () => {
  let component: TodoWrapComponent;
  let fixture: ComponentFixture<TodoWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
