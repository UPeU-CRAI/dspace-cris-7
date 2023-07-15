import { Component, Input, Optional } from '@angular/core';
import { ValueInputComponent } from '../value-input.component';
import { ControlContainer, NgForm, FormsModule } from '@angular/forms';
import { controlContainerFactory } from '../../../process-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

/**
 * Represents the user inputted value of a date parameter
 */
@Component({
    selector: 'ds-date-value-input',
    templateUrl: './date-value-input.component.html',
    styleUrls: ['./date-value-input.component.scss'],
    viewProviders: [{ provide: ControlContainer,
            useFactory: controlContainerFactory,
            deps: [[new Optional(), NgForm]] }],
    standalone: true,
    imports: [FormsModule, NgIf, TranslateModule]
})
export class DateValueInputComponent extends ValueInputComponent<string> {
  /**
   * The current value of the date string
   */
  value: string;

  /**
   * Initial value of the field
   */
  @Input() initialValue;

  ngOnInit() {
    this.value = this.initialValue;
  }

  setValue(value) {
    this.value = value;
    this.updateValue.emit(value);
  }
}
