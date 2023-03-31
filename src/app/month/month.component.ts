import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DataService } from '../data.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
})
export class MonthComponent {
  selectedMonth = this._dataService.months[0];
  selectedYear = this._dataService.years[this._dataService.years.length - 1];
  selectedType = 'On-time';
  constructor(private _dataService: DataService) {}

  getMonths() {
    return this._dataService.months;
  }

  getYears() {
    return this._dataService.years;
  }

  getSelectingFilingTypeId(): number {
    return this._dataService.fillingTypes.find((f) => f.completed)!.id;
  }

  getTitle(): string {
    if (this.getSelectingFilingTypeId() === 0) {
      return 'VAT Month';
    }
    return 'Tax Month';
  }

  shouldDisplayType() {
    return this.getSelectingFilingTypeId() === 1;
  }

  onSelectionMonthChange(event: MatSelectChange) {
    this._dataService.month = event.value;
  }

  onSelectionYearChange(event: MatSelectChange) {
    this._dataService.year = event.value;
  }
}
