import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId?: string;

  eneteredTitle = '';
  eneteredSummary = '';
  eneteredDate = '';

  constructor(private taskService: TaskService) { }

  onCancelAddTask() {
    this.close.emit();
  }

  onCreateTask() {
    this.taskService.addTask({
      title: this.eneteredTitle,
      summary: this.eneteredSummary,
      dueDate: this.eneteredDate
    }, this.userId!);
    this.close.emit();
  }
}
