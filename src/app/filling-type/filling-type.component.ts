import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
  dictKey: string;
}

@Component({
  selector: 'filling-type',
  templateUrl: 'filling-type.component.html',
  styleUrls: ['filling-type.component.css'],
})
export class FillingTypeComponent {
  filingGroup: FormGroup;

  constructor(private _dataService: DataService) {
    this.filingGroup = new FormGroup(
      {
        checkbox1: new FormControl(this._dataService.fillingTypes[0].completed),
        checkbox2: new FormControl(this._dataService.fillingTypes[1].completed),
      },
      Validators.required
    );
  }

  onCheckboxChange(checkboxNumber: number) {
    const checkbox1 = this.filingGroup.get('checkbox1');
    const checkbox2 = this.filingGroup.get('checkbox2');

    if (!checkbox1 || !checkbox2) return;

    if (checkboxNumber === 0 && checkbox1.value.completed) {
      // If checkbox 1 is already selected, do nothing when it's clicked again
      return;
    } else if (checkboxNumber === 1 && checkbox2.value.completed) {
      // If checkbox 2 is already selected, do nothing when it's clicked again
      return;
    } else if (checkboxNumber === 0) {
      // If checkbox 1 is clicked and not already selected, deselect checkbox 2
      checkbox1.setValue(true);
      checkbox2.setValue(false);

      this._dataService.filingType = 0;
    } else if (checkboxNumber === 1) {
      // If checkbox 2 is clicked and not already selected, deselect checkbox 1
      checkbox1.setValue(false);
      checkbox2.setValue(true);

      this._dataService.filingType = 1;
    }
  }

  getCheckbox1Value(): boolean {
    return this.filingGroup.value.checkbox1;
  }

  getCheckbox2Value(): boolean {
    return this.filingGroup.value.checkbox2;
  }

  getCheckboxLabel(index: number): string {
    return this._dataService.fillingTypes[index].name;
  }
}
