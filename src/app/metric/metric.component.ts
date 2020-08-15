import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent {
  private _value: number = 0;
  private _max: number = 100;

  @Input('used')
  set value(value: number) {
    if (isNaN(value)) value = 0;
      this._value = value;
  }

  get value(): number { return this._value; }

  @Input('available')
  set max(max: number) {
    if (isNaN(max)) max = 100;
    this._max = max;
  }

  get max(): number { return this._max; }

  isDanger() {
    return this.value / this.max > 0.7;
  }
}
