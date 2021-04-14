import { Component } from '@angular/core';
import { FieldRendetingType, MetadataBoxFieldRendering } from '../metadata-box.decorator';
import { RenderingTypeModelComponent } from '../rendering-type.model';

/**
 * This component renders the date metadata fields
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'span[ds-date]',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
@MetadataBoxFieldRendering(FieldRendetingType.DATE)
export class DateComponent extends RenderingTypeModelComponent {

}
