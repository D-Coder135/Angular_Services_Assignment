import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(private userService: UserService) {
  }

  onSetToActive(id: number) {

  }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }
}
