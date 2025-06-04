import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  tasks: string[] = [];
  newTask: string = '';
  errorMessage: string = '';

  addTask() {
    if (!this.newTask.trim()) {
      this.errorMessage = 'Please add a task';
      this.newTask = '';
      return;
    }
    this.errorMessage = '';
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  getButtonClass(type: string) {
    return {
      'btn-add': type == 'add',
      'btn-remove': type == 'remove',
    };
  }
}
