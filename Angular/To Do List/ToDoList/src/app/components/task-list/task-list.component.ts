import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: TaskModel[] = [];
  newTaskTitle = "";
  filterText: string = '';
  editingTaskId: number | null = null;
  editingTaskTitle: string = "";

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    const title = this.newTaskTitle.trim();
    if (!title) return;
    if (this.tasks.some(t => t.title === title)) return;

    const newTask: TaskModel = {
      id: Date.now(),
      title: this.newTaskTitle,
      completed: false
    };

    this.tasks.push(newTask);
    this.taskService.saveTasks(this.tasks);
    this.newTaskTitle = '';
  }
  toggleTask(task: TaskModel) {
    task.completed = !task.completed;
    this.taskService.saveTasks(this.tasks);
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.taskService.saveTasks(this.tasks);

  }

  get completedCount() {
    return this.tasks.filter(t => t.completed).length;
  }

  startEditing(task: TaskModel) {
    this.editingTaskId = task.id;
    this.editingTaskTitle = task.title;
  }

  saveEdit(task: TaskModel) {
    const title = this.editingTaskTitle.trim();
    if (!title) return;
    if (this.tasks.some(t => t.title === title && t.id !== task.id)) return;

    task.title = title;
    this.taskService.saveTasks(this.tasks);
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingTaskId = null;
    this.editingTaskTitle = '';
  }

  get filteredTasks() {
    const text = this.filterText.trim().toLowerCase();
    if (!text) return this.tasks;
    return this.tasks.filter(t => t.title.toLowerCase().includes(text));
  }

}
