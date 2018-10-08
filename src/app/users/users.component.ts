import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {
      id: 2,
      name: 'Grisha',
      sex: 'male'
    },
    {
      id: 4,
      name: 'Petya',
      sex: 'male'
    }, {
      id: 8,
      name: 'Sveta',
      sex: 'female'
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToUserPage(id) {
    this.router.navigate(['/users', id]);
  }

}
