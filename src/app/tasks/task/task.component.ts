import { Component, inject, Input } from '@angular/core';
import { UserTask } from '../../interface/user-task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) selectedUserTask!: UserTask
  private taskService = inject(TaskService);

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

}
