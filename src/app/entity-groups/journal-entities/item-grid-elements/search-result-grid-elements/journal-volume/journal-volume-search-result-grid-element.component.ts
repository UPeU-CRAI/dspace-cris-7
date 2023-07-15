import { Component } from '@angular/core';
import { ViewMode } from '../../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { ItemSearchResultGridElementComponent } from '../../../../../shared/object-grid/search-result-grid-element/item-search-result/item/item-search-result-grid-element.component';
import { focusShadow } from "@dspace/shared/animations";
import { TranslateModule } from '@ngx-translate/core';
import { TruncatablePartComponent } from '../../../../../shared/truncatable/truncatable-part/truncatable-part.component';
import { ThemedBadgesComponent } from '../../../../../shared/object-collection/shared/badges/themed-badges.component';
import { ThemedThumbnailComponent } from '../../../../../thumbnail/themed-thumbnail.component';
import { RouterLink } from '@angular/router';
import { NgIf, AsyncPipe } from '@angular/common';
import { TruncatableComponent } from '../../../../../shared/truncatable/truncatable.component';

@listableObjectComponent('JournalVolumeSearchResult', ViewMode.GridElement)
@Component({
    selector: 'ds-journal-volume-search-result-grid-element',
    styleUrls: ['./journal-volume-search-result-grid-element.component.scss'],
    templateUrl: './journal-volume-search-result-grid-element.component.html',
    animations: [focusShadow],
    standalone: true,
    imports: [TruncatableComponent, NgIf, RouterLink, ThemedThumbnailComponent, ThemedBadgesComponent, TruncatablePartComponent, AsyncPipe, TranslateModule]
})
/**
 * The component for displaying a grid element for an item search result of the type Journal Volume
 */
export class JournalVolumeSearchResultGridElementComponent extends ItemSearchResultGridElementComponent {
}
