import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  constructor(private _dataService: DataService) {}

  getFilingType() {
    return this._dataService.fillingType;
  }

  getVatMonth() {
    return `${this._dataService.month} ${this._dataService.year}`;
  }

  getTaxAmount() {
    return this.addCommas(
      this.addDecimal(this._dataService.taxAmount.toString())
    );
  }

  getVatAmount() {
    return this.addCommas(
      this.addDecimal(this._dataService.vatAmount.toString())
    );
  }

  getTotalAmount() {
    return this.addCommas(
      this.addDecimal(this._dataService.totalAmount.toString())
    );
  }

  private addDecimal(str: string): string {
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

  private addCommas(str: string): string {
    const parts = str.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // add "," every 3 digits
    return parts.join('.');
  }
}
