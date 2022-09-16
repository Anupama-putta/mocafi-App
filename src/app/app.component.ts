import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  usersList: Array<any> = [];
  displayedColumns: string[] = ['name', 'email', 'gender', 'status', 'action'];
  userDetailsToUpdate: any;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getUsersList();
  }

  public getUsersList() {
    this.appService.getUserList().subscribe((response) => {
      console.log(response);
      this.usersList = response;
    });
  }

  public updateUser(user: any) {
    this.userDetailsToUpdate = user;
  }

  public deleteUser(user: any) {
    this.appService.deleteUserDetails(user).subscribe((response: any) => {
      this.getUsersList();
    });
  }

  public CreateNewUser() {
    this.userDetailsToUpdate = {};
  }

  public userUpdates(event: any) {
    this.userDetailsToUpdate = null;
    this.getUsersList();
  }
}
