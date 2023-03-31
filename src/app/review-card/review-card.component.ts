import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { SummaryDialogComponent } from '../summary-dialog/summary-dialog.component';

/**
 * @title Basic cards
 */
@Component({
  selector: 'review-card',
  templateUrl: 'review-card.component.html',
  styleUrls: ['review-card.component.css'],
})
export class ReviewCardComponent {
  sectionNames: string[] = [
    'Tax Filling Detail',
    'Tax Computation',
    'Declaration',
  ];

  constructor(private _dataService: DataService, private dialog: MatDialog) {}

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

  openDialog() {
    const data = {
      filingType: this.getFilingType(),
      month: this._dataService.month,
      year: this._dataService.year,
      saleAmount: parseFloat(this.getTaxAmount()),
      taxAmount: parseFloat(this.getVatAmount()),
      surcharge: this._dataService.surcharge,
      penalty: this._dataService.penalty,
      totalAmount: parseFloat(this.getTotalAmount()),
    };
    const dialogRef = this.dialog.open(SummaryDialogComponent, {
      data: data,
    });
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
