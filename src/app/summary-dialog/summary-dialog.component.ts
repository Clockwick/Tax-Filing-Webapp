import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-summary-dialog',
  templateUrl: './summary-dialog.component.html',
  styleUrls: ['./summary-dialog.component.css'],
})
export class SummaryDialogComponent {
  formattedJson: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SummaryDialogComponent>
  ) {
    this.formattedJson = JSON.stringify(data, null, 2);
  }

  onClose() {
    this.dialogRef.close();
  }
}
