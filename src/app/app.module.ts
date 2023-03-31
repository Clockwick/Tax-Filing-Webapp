import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { CardComponent } from './card/card.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FillingTypeComponent } from './filling-type/filling-type.component';
import { TaxFillingDetailComponent } from './tax-filling-detail/tax-filling-detail.component';
import { TaxComputationComponent } from './tax-computation/tax-computation.component';
import { MatIconModule } from '@angular/material/icon';
import { MonthComponent } from './month/month.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SummaryComponent } from './summary/summary.component';
import { SummaryDialogComponent } from './summary-dialog/summary-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    CardComponent,
    ReviewCardComponent,
    FillingTypeComponent,
    TaxFillingDetailComponent,
    TaxComputationComponent,
    MonthComponent,
    SummaryComponent,
    SummaryDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
