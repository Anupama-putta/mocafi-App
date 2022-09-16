import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss'],
})
export class UiFormComponent {
  @Input() userDetails: any;
  @Output() public readonly userUpdated: EventEmitter<any> =
    new EventEmitter<string>();
  public uiForm: FormGroup;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getFormField();
  }

  public getFormField() {
    this.uiForm = new FormGroup({
      name: new FormControl(this.userDetails.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.minLength(50),
      ]),
      email: new FormControl(this.userDetails.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.minLength(50),
      ]),
      gender: new FormControl(this.userDetails.gender, [
        Validators.required,
        Validators.minLength(4),
        Validators.minLength(6),
      ]),
      status: new FormControl(this.userDetails.status, [
        Validators.required,
        Validators.minLength(6),
        Validators.minLength(8),
      ]),
    });
  }

  public updateUserDetails() {
    const userData = {
      name: this.uiForm.controls['name'].value,
      email: this.uiForm.controls['email'].value,
      gender: this.uiForm.controls['gender'].value,
      status: this.uiForm.controls['status'].value,
      id: this.userDetails && this.userDetails.id ? this.userDetails.id : null,
    };
    if (this.userDetails && this.userDetails.id) {
      this.appService.updateUserDetails(userData).subscribe((response) => {
        console.log(response);
        this.userUpdated.emit({ updateStatus: true });
      });
    } else {
      this.appService.postUserDetails(userData).subscribe((response: any) => {
        console.log(response);
        this.userUpdated.emit({ updateStatus: true });
      });
    }
  }
}
