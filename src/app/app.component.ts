import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userActvated = false;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.activatedEmitter.subscribe(didActivated => {
      this.userActvated = didActivated;
    });
  }
}
