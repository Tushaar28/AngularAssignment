import { Component } from '@angular/core';
import { Todo } from 'src/app/03_pipes/models/todo.interface';
import { AssignmentComponent } from '../../assignment.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  todo: any
  constructor(todos: AssignmentComponent){
    this.todo = todos.getTodos();
  }
  selected: any
  select(arr){
    this.selected = arr;
  };
  isActive(arr){
    return this.selected === arr;
  }
}
