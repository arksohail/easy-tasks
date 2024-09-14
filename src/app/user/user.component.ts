import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true
})
export class UserComponent {

  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;
  @Output() select = new EventEmitter();
  

  
  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());


  // selectedUsers = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUsers().avatar); // Using Signals to read computed values and listen to change detection

  // Old Way of using angular's Change Detection Mechanism "zone"
  get imagePath(): string {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(): void {
    this.select.emit(this.id);
  }
}
