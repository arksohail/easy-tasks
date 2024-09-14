import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  selectedUsers = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUsers().avatar); // Using Signals to read computed values and listen to change detection

  // Old Way of using angular's Change Detection Mechanism "zone"
  // get imagePath(): string {
  //   return 'assets/users/' + this.selectedUsers().avatar;
  // }

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUsers.set(DUMMY_USERS[randomIndex]);
  }
}
