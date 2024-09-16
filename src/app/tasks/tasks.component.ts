import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { UserTask } from '../interface/user-task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId?: string;

  isAddTask = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks(): UserTask[] {
    return this.taskService.getUserTasks(this.userId!);
  }

  onStartAddTask() {
    this.isAddTask = true;
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  onCloseAddTask() {
    this.isAddTask = false;
  }

}
