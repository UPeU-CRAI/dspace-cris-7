import { Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import {
  listableObjectComponent
} from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import {
  JournalVolumeComponent as BaseComponent
} from '../../../../../../../app/entity-groups/journal-entities/item-pages/journal-volume/journal-volume.component';
import { Context } from '../../../../../../../app/core/shared/context.model';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { RelatedItemsComponent } from '../../../../../../../app/item-page/simple/related-items/related-items-component';
import { GenericItemPageFieldComponent } from '../../../../../../../app/item-page/simple/field-components/specific-field/generic/generic-item-page-field.component';
import { ThemedThumbnailComponent } from '../../../../../../../app/thumbnail/themed-thumbnail.component';
import { MetadataFieldWrapperComponent } from '../../../../../../../app/shared/metadata-field-wrapper/metadata-field-wrapper.component';
import { DsoEditMenuComponent } from '../../../../../../../app/shared/dso-page/dso-edit-menu/dso-edit-menu.component';
import { ThemedItemPageTitleFieldComponent } from '../../../../../../../app/item-page/simple/field-components/specific-field/title/themed-item-page-field.component';
import { ThemedResultsBackButtonComponent } from '../../../../../../../app/shared/results-back-button/themed-results-back-button.component';
import { NgIf, AsyncPipe } from '@angular/common';

@listableObjectComponent('JournalVolume', ViewMode.StandalonePage, Context.Any, 'custom')
@Component({
    selector: 'ds-journal-volume',
    // styleUrls: ['./journal-volume.component.scss'],
    styleUrls: ['../../../../../../../app/entity-groups/journal-entities/item-pages/journal-volume/journal-volume.component.scss'],
    // templateUrl: './journal-volume.component.html',
    templateUrl: '../../../../../../../app/entity-groups/journal-entities/item-pages/journal-volume/journal-volume.component.html',
    standalone: true,
    imports: [NgIf, ThemedResultsBackButtonComponent, ThemedItemPageTitleFieldComponent, DsoEditMenuComponent, MetadataFieldWrapperComponent, ThemedThumbnailComponent, GenericItemPageFieldComponent, RelatedItemsComponent, RouterLink, AsyncPipe, TranslateModule]
})
/**
 * The component for displaying metadata and relations of an item of the type Journal Volume
 */
export class JournalVolumeComponent extends BaseComponent {
}
