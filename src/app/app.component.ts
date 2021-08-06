import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnDestroy*/{

  constructor(private appService: AppService) {}

  title = 'first-project';

  /*userForm = new FormGroup({
    firstName: new FormControl('', Validators.nullValidator && Validators.required),
    lastName: new FormControl('', Validators.nullValidator && Validators.required)
  });

  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  getAllUsers() {
    this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
      this.userCount = users.length;
      this.users = users;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.getAllUsers();
  }*/
}
