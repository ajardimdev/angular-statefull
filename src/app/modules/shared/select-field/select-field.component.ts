import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessorDirective } from '../control-value-acessor.directive';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

type Option = {
  label: string
  value: string | number | boolean
}

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectFieldComponent),
  multi: true
}

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.sass'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class SelectFieldComponent extends ControlValueAccessorDirective {
  @Input()
  options: Option[] = []
}
