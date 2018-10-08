import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: User;
  subscription: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(params => console.log(params));

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
