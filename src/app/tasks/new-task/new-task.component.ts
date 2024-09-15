import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from 'src/app/interface/user-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>()

  eneteredTitle = '';
  eneteredSummary = '';
  eneteredDate = '';

  onCancelAddTask() {
    this.cancel.emit();
  }

  onCreateTask() {
    this.add.emit({
      title: this.eneteredTitle,
      summary: this.eneteredSummary,
      dueDate: this.eneteredDate
    });
  }
}
