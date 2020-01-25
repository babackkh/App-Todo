import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDialogueComponent } from './todo-dialogue.component';

describe('TodoDialogueComponent', () => {
  let component: TodoDialogueComponent;
  let fixture: ComponentFixture<TodoDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
