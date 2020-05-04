import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor() { 
    this.todos = [
      {
        id: 1,
        title: 'Buhatonon',
        completed: false
      },
      {
        id: 2,
        title: 'Buhatonon kapoy raba kaayo',
        completed: false
      },
      {
        id: 3,
        title: 'Hahays',
        completed: false
      },
      {
        id: 4,
        title: 'Nindot man diay neng Angular',
        completed: false
      },
    ]
  }

  ngOnInit(): void {
  }

  toggleStatus(id:number): void {
    const todo = this.todos.find(item => item.id === id)
    todo.completed = !todo.completed
  }

  removeTodo(id:number, index:number): void {
    const todoIndex = this.todos.findIndex(item => item.id === id)
    this.todos.splice(todoIndex, 1)
  }
}
