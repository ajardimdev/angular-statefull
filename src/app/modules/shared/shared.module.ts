import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessorDirective } from './control-value-acessor.directive';
import { SelectFieldComponent } from './select-field/select-field.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    ControlValueAccessorDirective,
    SelectFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputFieldComponent,
    FormsModule,
    ReactiveFormsModule,
    SelectFieldComponent
  ]
})
export class SharedModule { }
