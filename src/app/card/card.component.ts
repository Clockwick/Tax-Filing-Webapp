import { Component } from '@angular/core';

/**
 * @title Basic cards
 */
@Component({
  selector: 'input-detail-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class CardComponent {
  sectionNames: string[] = ['1. Tax Filling Detail', '2. Tax Computation'];
}
