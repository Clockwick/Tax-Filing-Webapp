import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _dataService: DataService
  ) {}

  getIsInvalid(): boolean {
    return !this._dataService.isValid;
  }

  getShouldDisabled(): boolean {
    return this._dataService.shouldDisabledForFirstTime
      ? true
      : this.getIsInvalid();
  }
}
