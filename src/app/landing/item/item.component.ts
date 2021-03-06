import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {

  @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public currency: string;

  public getCurrency(): string {
    return 'USD';
  }
}
