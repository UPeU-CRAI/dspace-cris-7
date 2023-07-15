import { Component } from '@angular/core';
import { ViewMode } from '../../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from '../../../../object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from '../../../../../core/shared/item.model';
import { focusShadow } from "@dspace/shared/animations";
import { ItemSearchResultGridElementComponent } from '../../../search-result-grid-element/item-search-result/item/item-search-result-grid-element.component';

@listableObjectComponent('Publication', ViewMode.GridElement)
@listableObjectComponent(Item, ViewMode.GridElement)
@Component({
    selector: 'ds-item-grid-element',
    styleUrls: ['./item-grid-element.component.scss'],
    templateUrl: './item-grid-element.component.html',
    animations: [focusShadow],
    standalone: true,
    imports: [ItemSearchResultGridElementComponent]
})
/**
 * The component for displaying a grid element for an item of the type Publication
 */
export class ItemGridElementComponent extends AbstractListableElementComponent<Item> {
}
