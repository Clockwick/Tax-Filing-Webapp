import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tax-computation',
  templateUrl: './tax-computation.component.html',
  styleUrls: ['./tax-computation.component.css'],
})
export class TaxComputationComponent {
  title = '2. Tax Computation';

  taxAmount: string = '';
  vatAmount: string = '';
  initialVatAmount: number = 0;
  shouldShowInvalidTax = false;
  shouldShowInvalidData = false;

  constructor(private _dataService: DataService) {}

  onFocus() {
    this.taxAmount = this.taxAmount.replaceAll(',', '');
  }

  onFocusVat() {
    this.vatAmount = this.vatAmount.replaceAll(',', '');
  }

  onInput(event: any) {
    const pattern = /^[\d,.]*$/;
    const inputChar = event.data;
    if (!pattern.test(inputChar)) {
      event.target.value = event.target.value.replace(inputChar, '');
      event.preventDefault();
    }
  }

  onInputVat(event: any) {
    const pattern = /^[\d,.]*$/;
    const inputChar = event.data;
    if (!pattern.test(inputChar)) {
      event.target.value = event.target.value.replace(inputChar, '');
      event.preventDefault();
    }
  }

  onBlur(event: any) {
    if (event.target.value.length === 0) return;
    const floatTaxAmount = parseFloat(this.taxAmount);
    this.initialVatAmount = floatTaxAmount * 0.07;

    this._dataService.surcharge = floatTaxAmount * 0.01;
    this._dataService.vatAmount = this.initialVatAmount;
    this.vatAmount = this.addCommas(
      this.addDecimal(String(this.initialVatAmount))
    );
    this._dataService.taxAmount = floatTaxAmount;
    this.taxAmount = this.addCommas(this.addDecimal(floatTaxAmount.toString()));

    if (floatTaxAmount === 0) this._dataService.isValid = false;
    else this._dataService.isValid = true;
    this._dataService.shouldDisabledForFirstTime = false;
  }

  onBlurVat(event: any) {
    const vatAmount = event.target.value;
    if (Math.round(Math.abs(vatAmount - this.initialVatAmount)) > 20) {
      this.shouldShowInvalidTax = true;
    } else {
      this.shouldShowInvalidTax = false;
    }

    const floatVatAmount = parseFloat(this.vatAmount);

    this._dataService.vatAmount = floatVatAmount;
    this.vatAmount = this.addCommas(this.addDecimal(floatVatAmount.toString()));
    if (floatVatAmount === 0) this._dataService.isValid = false;
    else this._dataService.isValid = true;
    this._dataService.shouldDisabledForFirstTime = false;
  }

  addDecimal(str: string): string {
    if (str.length === 0) return '';
    const decimalIndex = str.indexOf('.');
    if (decimalIndex !== -1) {
      const decimalDigits = str.length - decimalIndex - 1;
      if (decimalDigits < 2) {
        str += '0'.repeat(2 - decimalDigits);
      } else {
        str = str.substring(0, decimalIndex + 3);
      }
    } else {
      str += '.00';
    }
    return str;
  }

  addCommas(str: string): string {
    const parts = str.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // add "," every 3 digits
    return parts.join('.');
  }

  getFilingTypeId(): number {
    return this._dataService.fillingTypes.find((f) => f.completed)!.id;
  }

  shouldShowLatePayment(): boolean {
    return this.getFilingTypeId() === 1;
  }

  getPenalty() {
    return this._dataService.penalty;
  }

  getPenaltyPlaceholder() {
    return `${this.addCommas(
      this.addDecimal(this.getPenalty().toString())
    )} THB`;
  }

  getSurcharge() {
    return this._dataService.surcharge;
  }

  getSurchargePlaceholder() {
    return `${this.addCommas(
      this.addDecimal(this.getSurcharge().toString())
    )} THB`;
  }

  getTotalAmount() {
    return this._dataService.totalAmount;
  }

  getTotalAmountPlaceholder() {
    return `${this.addCommas(
      this.addDecimal(this.getTotalAmount().toString())
    )} THB`;
  }

  getIsValid() {
    return this._dataService.isValid;
  }
}
