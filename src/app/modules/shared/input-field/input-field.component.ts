import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from '../control-value-acessor.directive';

type InputType = 'text' | 'number' | 'email' | 'password'

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
}

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.sass'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent extends ControlValueAccessorDirective {
  @Input()
  type: InputType  = 'text'
}
