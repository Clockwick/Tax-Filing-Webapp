import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _fillingTypes: Task[] = [
    {
      id: 0,
      name: 'Ordinary Filling',
      completed: true,
    },
    {
      id: 1,
      name: 'Additional Filling',
      completed: false,
    },
  ];
  private _months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  private _years = Array.from(
    { length: new Date().getFullYear() - 2019 },
    (_, i) => (i + 2020).toString()
  );
  private _filingType: string = this._fillingTypes[0].name;
  private _vatAmount: number = 0;
  private _taxAmount: number = 0;

  private _month: string = this._months[0];
  private _year: string = this.years[this.years.length - 1];

  private _surcharge: number = 0;
  private _penalty: number = 200;
  private _totalAmount: number =
    this._vatAmount + this._surcharge + this._penalty;
  private _isValid: boolean = true;
  private _shouldDisabledForFirstTime = true;

  constructor() {}

  public get isValid() {
    return this._isValid;
  }

  public set isValid(value: boolean) {
    this._isValid = value;
  }

  public get shouldDisabledForFirstTime() {
    return this._shouldDisabledForFirstTime;
  }

  public set shouldDisabledForFirstTime(value: boolean) {
    this._shouldDisabledForFirstTime = value;
  }

  public get fillingTypes() {
    return this._fillingTypes;
  }

  public get months() {
    return this._months;
  }

  public set month(value: string) {
    this._month = value;
  }

  public get month() {
    return this._month;
  }

  public get years() {
    return this._years;
  }

  public get year() {
    return this._year;
  }

  public set year(value: string) {
    this._year = value;
  }

  public get vatAmount() {
    return this._vatAmount;
  }

  public set vatAmount(value: number) {
    this._vatAmount = value;
    this._totalAmount = this._vatAmount + this._surcharge + this._penalty;
  }

  public get totalAmount() {
    return this._totalAmount;
  }

  public get taxAmount() {
    return this._taxAmount;
  }

  public set taxAmount(value: number) {
    this._taxAmount = value;
    this._totalAmount = this._vatAmount + this._surcharge + this._penalty;
  }

  public resetSurcharge() {
    this._surcharge = 0;
  }

  public resetPenalty() {
    this._penalty = 0;
  }

  public resetTaxAmount() {
    this._taxAmount = 0;
  }

  public resetVatAmount() {
    this._vatAmount = 0;
  }

  public set penalty(value: number) {
    this._penalty = value;
    this._totalAmount = this._vatAmount + this._surcharge + this._penalty;
  }

  public get penalty() {
    return this._penalty;
  }

  public get surcharge() {
    return this._surcharge;
  }

  public set surcharge(value: number) {
    this._surcharge = value;
    this._totalAmount = this._vatAmount + this._surcharge + this._penalty;
  }

  public get fillingType() {
    return this._filingType;
  }

  public set filingType(id: number) {
    this._fillingTypes = this.fillingTypes.map((fillingType) => {
      if (fillingType.id === id) {
        return { ...fillingType, completed: true };
      }
      return { ...fillingType, completed: false };
    });
    this._filingType = this._fillingTypes[id].name;
  }
}
