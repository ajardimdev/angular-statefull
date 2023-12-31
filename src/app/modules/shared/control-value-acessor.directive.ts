import { Directive, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



@Directive({
  selector: '[appControlValueAccessor]'
})
export class ControlValueAccessorDirective implements ControlValueAccessor {
  private innerValue!: any

  @Input()
  id!: string

  @Input()
  label!: string

  @Input()
  isReadOnly: boolean = false

  get value() {
    return this.innerValue
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v
      this.onChangeCb(v)
    }
  }

  onChangeCb: (_: any) => void = () => {}
  onTouchedCb: (_: any) => void = () => {}

  writeValue(v: any): void {
    this.value = v
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn
  }


  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled
  }

}
