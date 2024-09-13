import { Component, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  selectedUsers = DUMMY_USERS[randomIndex];

  get imagePath(): string {
    return 'assets/users/' + this.selectedUsers.avatar
  }

  onSelectUser():void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUsers = DUMMY_USERS[randomIndex];
  }
}
