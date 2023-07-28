import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  phoneNumberForm: FormGroup;

  isEmailNotificationOn: boolean = true;
  isSMSNotificationOn: boolean = true;
  isUserAlreadyRegisteredForSMS: boolean = true;

  constructor(private formBuilder: FormBuilder, private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {
    this.phoneNumberForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, this.phoneNumberValidator]]
    });
  }

  ngOnInit() {}

  phoneNumberValidator(control: FormControl): { [key: string]: any } | null {
    const validPhoneNumber = /^\d{10}$/; // Regular expression to validate a 10-digit phone number
    return validPhoneNumber.test(control.value) ? null : { 'invalidPhoneNumber': true };
  }

  hasError(errorType: string): boolean | undefined {
    const control = this.phoneNumberForm?.get('phoneNumber');
    return control?.touched && control?.hasError(errorType);
  }

  onNotifyClicked() {
    if (this.phoneNumberForm.valid) {
      this.bottomSheetRef.dismiss();
    } 
  }
}
