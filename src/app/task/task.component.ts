import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTask } from '../interface/user-task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) selectedUserTask?: UserTask
  @Output() complete = new EventEmitter<string>()

  onCompleteTask() {
    this.complete.emit(this.selectedUserTask?.id);
  }
}
