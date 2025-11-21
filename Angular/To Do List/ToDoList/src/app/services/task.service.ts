import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private key = 'tasks';
  constructor() { }
  getTasks(): TaskModel[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }
  saveTasks(tasks: TaskModel[]): void {
    localStorage.setItem(this.key, JSON.stringify(tasks));
  }
}
